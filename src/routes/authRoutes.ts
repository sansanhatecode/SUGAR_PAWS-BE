import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db";
import { CreateUserDto, LoginUserDto } from "../dtos/User.dto";

const router = express.Router();

router.post("/register", async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

router.post("/login", async (req: Request<{}, {}, LoginUserDto>, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await db.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

export default router;
