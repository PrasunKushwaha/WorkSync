import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-20 py-8 text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6">
          <a href="#about" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            About Us
          </a>
          <a href="#contact" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </a>
          <a href="#privacy" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#terms" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Terms of Service
          </a>
        </nav>

        {/* Copyright Info */}
        <p className="text-sm">&copy; 2023 WorkSync. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
