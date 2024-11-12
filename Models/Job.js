// models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: [String],
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
