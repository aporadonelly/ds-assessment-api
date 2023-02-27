import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import moment from "moment";
import mtz from "moment-timezone";

import prisma from "@/prisma/prisma-client";
import { createConference, verifyConference } from "@/src/schema/conference";

const router = Router();

router.post(
  "/conferences/verification",
  validateRequest(verifyConference),
  async (req, res, next) => {
    try {
      const { studentNumber, homeRoomName, nounIds } = req.body;
      const now = mtz.tz("Asia/Manila");

      const conferences = await prisma.conference.findMany({
        where: {
          homeRoomName,
        },
      });

      const conference = conferences.find(
        (conference) => conference.studentNumber === studentNumber
      );

      if (!conferences.length) {
        return res.status(400).json({ message: "Please input correct homeroom name" });
      }

      if (!conference) {
        return res.status(400).json({ message: "Please input correct student number" });
      }

      if (
        conference &&
        conference.nouns.split(", ").sort().join("") !== nounIds.sort().join("")
      ) {
        return res
          .status(400)
          .json({ message: "Please select the pictures on shown on the letter" });
      }

      if (
        conference &&
        now.isBefore(
          moment(
            moment(conference.startDate).format("YYYY-MM-DD HH:mm:ss")
          ).subtract(10, "minutes")
        )
      ) {
        return res
          .status(400)
          .json({ message: "Sign-in attempt too early. Please try again later 10 minutes before start time" });
      }

      if (
        conference &&
        now.isAfter(
          moment(
            moment(conference.startDate).format("YYYY-MM-DD HH:mm:ss")
          ).add(5, "minutes")
        )
      ) {
        return res
          .status(400)
          .json({ message: "Your conference schedule has passed. Please contact the teacher." });
      }

      res.json(conference);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/conferences",
  validateRequest(createConference),
  async (req, res, next) => {
    try {
      const { studentNumber, homeRoomName, nounIds, startDate, endDate } =
        req.body;

      const nouns = await prisma.noun.findMany({
        select: {
          id: true,
        },
        where: {
          id: {
            in: nounIds,
          },
        },
      });

      const conference = await prisma.conference.findFirst({
        where: {
          studentNumber,
          homeRoomName,
        },
      });

      if (nouns.length !== nounIds.length) {
        return res.status(400).json({ message: "Some noun id doesn't exist" });
      }

      if (conference) {
        const result = await prisma.conference.update({
          where: {
            id: conference.id,
          },
          data: {
            nouns: nouns.map((noun) => noun.id).join(", "),
            startDate: moment(startDate).toDate(),
            endDate: moment(endDate).toDate(),
          },
        });

        res.json(result);
      } else {
        const result = await prisma.conference.create({
          data: {
            studentNumber,
            homeRoomName,
            nouns: nouns.map((noun) => noun.id).join(", "),
            startDate: moment(startDate).toDate(),
            endDate: moment(endDate).toDate(),
          },
        });

        res.json(result);
      }
    } catch (error) {
      next(error);
    }
  }
);

export default router;
