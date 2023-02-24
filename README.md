# parent-teacher-remote-api

1. git clone https://github.com/aporadonelly/parent-teacher-remote-api.git
2. cd parent-teacher-remote-api
3. sudo touch .env
4. sudo vi .env
5. copy and paste

```
   PORT=3000
   DATABASE_URL=mysql://root:mypassword@localhost:3306/mydb
```

6. type wq to save & exit
7. npm install
8. npm run db:migrate
9. npm run db:push
10. npm start
