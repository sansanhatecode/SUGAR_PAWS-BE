import express, { Request, Response } from "express";
import usersRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes";

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

app.use('/api/users', usersRouter);

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});