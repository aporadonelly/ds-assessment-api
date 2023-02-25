# ds-assessment-api

1. git clone https://github.com/aporadonelly/ds-assessment-api.git
2. cd parent-teacher-remote-api
3. sudo touch .env
4. sudo vi .env
5. copy and paste

```
   PORT=3000
   DATABASE_URL=mysql://root:root@localhost:8889/mydb
```

6. save & exit (:wq)
7. npm install
8. npm run db:migrate
9. npm run db:push
10. npm start
