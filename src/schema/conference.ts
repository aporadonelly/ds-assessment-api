import { z } from "zod"; //Schema validation using zod - TS only does static type checking at compile time and doesn’t have any runtime checks at all, that's where Zod comes in. Zod helps with data integrity and prevents sending out garbage values to the database. - https://blog.logrocket.com/schema-validation-typescript-zod/

export const createConference = {
  body: z.object({
    studentNumber: z.string().min(1),
    homeRoomName: z.string().min(1),
    nounIds: z.array(z.number()).min(2),
  }),
};

export const verifyConference = {
  body: z.object({
    studentNumber: z.string().min(1),
    homeRoomName: z.string().min(1),
    nounIds: z.array(z.number()).min(2),
  }),
};
