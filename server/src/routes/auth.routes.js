import express from "express";
import protect from "../middlewares/auth.js";
import validateRegister from "../validators/authValidator.js";

import {
  register,
  login,
  logout,
  getProfile,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protect, getProfile);

export default router;