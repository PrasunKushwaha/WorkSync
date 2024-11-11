// JobDetails.js
import React, { useState } from 'react';

const JobDetails = () => {
  const [isSaved, setIsSaved] = useState(false);

  // Dummy job data
  const job = {
    title: "Full-Stack Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    relevanceScore: 85,
    description: "We're seeking a talented Full-Stack Engineer to join our team and help us build innovative solutions.",
    responsibilities: [
      "Design and implement scalable web applications.",
      "Collaborate with cross-functional teams.",
      "Write clean, maintainable code.",
    ],
    skillsRequired: ["JavaScript", "React", "Node.js", "SQL", "APIs"],
    applicationDeadline: "December 31, 2024",
    companyProfileUrl: "#",
  };

  const handleSaveForLater = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-100">
      {/* Job Header */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          <a href={job.companyProfileUrl} className="text-blue-600 dark:text-blue-400 hover:underline">
            {job.company}
          </a> - {job.location}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Relevance Score: </span>
          <span className="ml-2 text-lg font-semibold text-blue-600 dark:text-blue-400">{job.relevanceScore}%</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="max-w-4xl mx-auto mt-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Job Description</h2>
        <p>{job.description}</p>

        {/* Responsibilities */}
        <div>
          <h3 className="text-xl font-semibold mt-4">Responsibilities</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Required Skills */}
        <div>
          <h3 className="text-xl font-semibold mt-4">Skills Required</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skillsRequired.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Application Deadline */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Application Deadline: {job.applicationDeadline}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Apply Now
          </button>
          <button
            onClick={handleSaveForLater}
            className={`px-6 py-2 font-semibold rounded-lg focus:outline-none ${isSaved ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'} hover:bg-gray-300 dark:hover:bg-gray-600`}
          >
            {isSaved ? 'Saved' : 'Save for Later'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
