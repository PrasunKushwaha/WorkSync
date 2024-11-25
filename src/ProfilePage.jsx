// ProfilePage.js
import React, { useState } from 'react';

const ProfilePage = ({ userType }) => {
  const isJobSeeker = userType === 'jobSeeker';

  return (
    <div className="min-h-screen p-6 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-center">
          {isJobSeeker ? 'Job Seeker Profile' : 'Employer Profile'}
        </h1>

        <form className="space-y-6">
          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              {isJobSeeker ? 'Full Name' : 'Company Name'} *
            </label>
            <input
              type="text"
              placeholder={isJobSeeker ? 'Full Name' : 'Company Name'}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
              Email *
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {isJobSeeker ? (
            <>
              {/* Job Seeker-Specific Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Skills
                </label>
                <input
                  type="text"
                  placeholder="E.g., React, Node.js, Python"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Work Experience
                </label>
                <textarea
                  placeholder="List your work experience here"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Education
                </label>
                <textarea
                  placeholder="List your educational background here"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Job Preferences
                </label>
                <input
                  type="text"
                  placeholder="Preferred job titles, locations, etc."
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          ) : (
            <>
              {/* Employer-Specific Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Company Logo
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="Industry (e.g., Tech, Healthcare)"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Company location"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                  Job Posting History
                </label>
                <textarea
                  placeholder="Briefly describe previous job postings"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
