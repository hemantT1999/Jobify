import { register, login, updateUser } from "../controllers/authController.js";
import express from "express";
import rateLimiter from "express-rate-limit";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

// rate-limiting middleware for Express
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(auth, updateUser);

export default router;
