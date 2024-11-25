import React from "react";

const AppliedJobs = () => {
  // Dummy data for jobs
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      status: "Interview Scheduled",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeBase Solutions",
      status: "Application Under Review",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      status: "Rejected",
    },
  ];

  return (
    <div className="min-h-screen p-6 mt-12 dark:bg-gray-900 dark:text-white">
      <h1 className="mb-6 text-3xl font-bold">Applied Jobs</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Company: {job.company}
            </p>
            <p className={`font-semibold mt-2 ${
              job.status === "Rejected"
                ? "text-red-500"
                : job.status === "Interview Scheduled"
                ? "text-green-500"
                : "text-yellow-500"
            }`}>
              Status: {job.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
