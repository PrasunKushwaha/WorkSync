// CandidateReview.js
import React, { useState } from 'react';

const CandidateReview = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      relevanceScore: 92,
      experience: '5 years in Software Engineering',
      skills: ['React', 'Node.js', 'JavaScript'],
    },
    {
      id: 2,
      name: 'John Smith',
      relevanceScore: 85,
      experience: '3 years in Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    // Additional candidate data here
  ]);

  return (
    <div className="min-h-screen p-6 text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-5xl p-8 mx-auto mt-24 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-center">Candidate Review</h1>
        <div className="space-y-6">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="p-4 rounded-lg shadow bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{candidate.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Experience: {candidate.experience}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Skills: {candidate.skills.join(', ')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    Relevance Score: {candidate.relevanceScore}%
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  View Resume
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Shortlist
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  Schedule Interview
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateReview;
