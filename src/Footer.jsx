import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-20 py-8 text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6">
          <Link to="/about">
          <button className="transition hover:text-blue-500 dark:hover:text-blue-400">
            About Us
          </button></Link>
          
          <Link to="/contact">
          <button className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </button></Link>
          
          <a href="#privacy" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#terms" className="transition hover:text-blue-500 dark:hover:text-blue-400">
            Terms of Service
          </a>
        </nav>

        {/* Copyright Info */}
        <p className="text-sm">&copy; 2024 WorkSync. All rights reserved.</p>

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
