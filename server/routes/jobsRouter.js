import express from "express";
import { auth, checkAdminRole } from "../middlewares/auth.js";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
  applyForJob,
  getAppliedJobs,
} from "../controllers/jobsController.js";

// Admin routes
router.route("/").post([auth, checkAdminRole], createJob);
router
  .route("/:id")
  .patch([auth, checkAdminRole], updateJob)
  .delete([auth, checkAdminRole], deleteJob);

// Job seeker routes
router.route("/").get(auth, getAllJobs);
router.route("/apply/:id").post(auth, applyForJob);
router.route("/applied").get(auth, getAppliedJobs);
router.route("/stats").get(auth, showStats);

export default router;
