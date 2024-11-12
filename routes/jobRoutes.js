// routes/jobRoutes.js
const express = require("express");
const { createJob, getJobs, updateJob, deleteJob } = require("../Controllers/jobController");
const { authMiddleware, isLoggedIn, isOwner } = require("../middleware/authMiddleware");
const router = express.Router();

// Apply necessary middleware for each route
router.post("/", isLoggedIn, createJob);
router.get("/", getJobs);
router.put("/:id", isLoggedIn, isOwner, updateJob);
router.delete("/:id", isLoggedIn, isOwner, deleteJob);


module.exports = router;

console.log({ createJob, getJobs, updateJob, deleteJob });

