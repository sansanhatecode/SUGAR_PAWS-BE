import express from "express";
import usersRouter from "./routes/userRoutes"

const app = express();

const PORT = 3000;

app.use('/api/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})