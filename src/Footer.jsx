// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <nav className="flex justify-center space-x-4">
          <a href="#about" className="hover:text-blue-400">About Us</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400">Terms of Service</a>
        </nav>
        <p>&copy; 2023 WorkSync. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
