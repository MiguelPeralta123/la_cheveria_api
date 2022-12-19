import { Router } from "express";

import {
  getUser,
  createUser
} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", getTransf);

router.post("/login", createTransf);

export default router;