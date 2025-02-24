import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUserInfo } from "../handlers/user";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUserInfo);

router.post("/", createUser);

router.delete("/:id", deleteUser);

export default router;