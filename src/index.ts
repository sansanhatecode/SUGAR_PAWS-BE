import express, { Request, Response } from "express";
import usersRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

app.use('/api/users', usersRouter);

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(process.env.PORT)
});