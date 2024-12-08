// LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  return (
   <div className="bg-gray-100 dark:bg-gray-900 ">
    

      {/* Hero Banner */}
       <section className="relative py-20 mt-12 text-center text-white bg-blue-600 dark:bg-gray-700">
        <motion.div
          className="max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Discover Your Next Career with AI</h1>
          <p className="text-lg">WorkSync connects talented job seekers with top companies using intelligent matching and personalized recommendations.</p>
         
         <Link to="/login"><motion.button
            className="inline-block px-8 py-3 mt-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-100 dark:text-white dark:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button></Link>
          
        </motion.div>
      </section>

      {/* Feature Overview Section */}
   <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Platform Features</h2>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500">AI-Powered Job Matching</h3>
              <p className='dark:text-white'>WorkSync uses AI algorithms to match you with jobs that fit your skills and experience, making your job search more efficient.</p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500">Personalized Recommendations</h3>
              <p className='dark:text-white'>Receive job recommendations tailored to your career interests and background for a more targeted job search experience.</p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500">Automated Resume Screening</h3>
              <p className='dark:text-white'>For employers, WorkSync’s AI-powered screening helps you quickly filter resumes, reducing hiring bias and improving efficiency.</p>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500">Real-Time Application Tracking</h3>
              <p className='dark:text-white'>Stay updated on the status of your applications in real time, and for employers, manage candidates seamlessly in one place.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

         {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Choose WorkSync?</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <motion.div
              className="p-4 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-500">For Job Seekers</h3>
              <p className='dark:text-white'>Quickly discover relevant job opportunities, receive personalized job suggestions, and track your application status in real-time.</p>
            </motion.div>
            <motion.div
              className="p-4 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-500">For Employers</h3>
              <p className='dark:text-white'>Streamline hiring with automated resume parsing, candidate matching, and a user-friendly dashboard for easy applicant tracking.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">What Our Users Say</h2>
          <motion.div
            className="grid gap-8 sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="text-gray-600 dark:text-white">"WorkSync helped me land my dream job by connecting me with the perfect role!"</p>
              <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100">- Sarah, Software Developer</span>
            </motion.div>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="text-gray-600 dark:text-white">"WorkSync’s AI-powered resume screening made hiring so much easier and faster!"</p>
              <span className="block mt-2 text-sm font-semibold text-gray-800 dark:text-gray-100">- John, Hiring Manager</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

            {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">How It Works</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-500">For Job Seekers</h3>
              <p className='dark:text-white'>Sign up → Set up Profile → Get Job Matches → Apply & Track Status</p>
            </div>
            <div> 
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-500">For Employers</h3>
              <p className='dark:text-white'>Sign up → Post Job → Review AI-Matched Candidates → Manage Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default LandingPage;
