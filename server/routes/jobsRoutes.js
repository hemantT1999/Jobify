import express from "express";
import auth from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
  getAllJobsAdmin,
} from "../controllers/jobsController.js";

// Protect all routes
router.use(auth);

// Regular routes
router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

// Admin only routes - needs both auth and adminAuth
router.route("/admin/all").get(adminAuth, getAllJobsAdmin);

export default router;
