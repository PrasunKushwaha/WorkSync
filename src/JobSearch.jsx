// JobSearch.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');

  const jobPostings = [
    { title: "Software Engineer", location: "New York, NY", industry: "Tech", experience: "Mid-level", description: "Develop and maintain software solutions." },
    { title: "Data Scientist", location: "San Francisco, CA", industry: "Tech", experience: "Senior", description: "Analyze and interpret complex data sets." },
    { title: "Marketing Specialist", location: "Austin, TX", industry: "Marketing", experience: "Entry-level", description: "Assist in developing marketing strategies." },
    // Add more sample job postings
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-100">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Job Search</h1>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search for jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Location</label>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Industry</label>
            <input
              type="text"
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Experience Level</label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Level</option>
              <option value="Entry-level">Entry-level</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto space-y-4">
        {jobPostings
          .filter(
            (job) =>
              (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
              (location === '' || job.location.toLowerCase().includes(location.toLowerCase())) &&
              (jobTitle === '' || job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
              (industry === '' || job.industry.toLowerCase().includes(industry.toLowerCase())) &&
              (experienceLevel === '' || job.experience === experienceLevel)
          )
          .map((job, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-500 dark:text-gray-400">{job.location} - {job.industry} - {job.experience}</p>
              <p className="mt-2">{job.description}</p>
              <button className="mt-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Apply Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobSearch;
