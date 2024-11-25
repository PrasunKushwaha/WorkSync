// DashboardPage.js
import React, { useState } from 'react';

const DashboardPage = () => {
  // State to determine user type (Job Seeker or Employer)
  const [userType, setUserType] = useState('jobSeeker'); // or 'employer'

  // Sidebar links based on user type
  const jobSeekerLinks = [
    { name: 'Job Search', path: '/jobsearch' },
    { name: 'Applied Jobs', path: '/appliedjobs' },
    { name: 'Learn', path: '/learn' },
    { name: 'Settings', path: '/settings' },
  ];

  const employerLinks = [
    { name: 'Posted Jobs', path: '/postedjobs' },
    { name: 'Candidate Review', path: '/candidatereview' },
    { name: 'Settings', path: '/settings' },
  ];

  const links = userType === 'jobSeeker' ? jobSeekerLinks : employerLinks;

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md dark:bg-gray-800">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {userType === 'jobSeeker' ? 'Job Seeker Dashboard' : 'Employer Dashboard'}
          </h2>
        </div>
        <nav className="mt-6">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.path}
                  className="block px-4 py-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="mb-6 text-3xl font-bold">
          Welcome, {userType === 'jobSeeker' ? 'Job Seeker' : 'Employer'}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Use the sidebar to navigate to different sections of your dashboard.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example Card */}
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Perform quick actions like posting a job or applying for your dream role!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
