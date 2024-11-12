const Job = require("../Models/Job");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

// Create Job
exports.createJob = catchAsync(async (req, res, next) => {
  const job = new Job({ ...req.body, employer: req.user.id });
  await job.save();
  res.status(201).json({ success: true, message: "Job created successfully", job });
});

// Get Jobs
exports.getJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find().populate("employer", "name");
  if (!jobs || jobs.length === 0) {
    return next(new ExpressError(404, "No jobs found")); // Use next to forward error to middleware
  }
  res.status(200).json({ success: true, jobs });
});

// Update Job
exports.updateJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedJob) {
    return next(new ExpressError(404, "Job not found")); // Use next to forward error to middleware
  }

  res.status(200).json({ success: true, message: "Job updated successfully", updatedJob });
});

// Delete Job
exports.deleteJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return next(new ExpressError(404, "Job not found")); // Use next to forward error to middleware
  }

  res.status(200).json({ success: true, message: "Job deleted successfully" });
});
