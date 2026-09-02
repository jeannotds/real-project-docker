import express from "express";
import {
  createUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
