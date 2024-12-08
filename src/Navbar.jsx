import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Link as ScrollLink } from "react-scroll";
import DarkLogo from "./assets/Dark_Logo.jpg";
import LightLogo from "./assets/Light_Logo.jpg";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const { isLoggedIn, setAuthToken } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    window.location.href = "/"; // Redirect to homepage
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          {isDarkMode ? (
            <img src={DarkLogo} alt="Logo" className="w-10 h-10" />
          ) : (
            <img src={LightLogo} alt="Logo" className="w-10 h-10" />
          )}
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">
            WorkSync
          </span>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden space-x-6 text-gray-700 md:flex dark:text-gray-300">
          <ScrollLink to="how-it-works" smooth={true} duration={500}>
            <button className="hover:text-blue-600 dark:hover:text-blue-400">
              How It Works
            </button>
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500}>
            <button className="hover:text-blue-600 dark:hover:text-blue-400">
              Features
            </button>
          </ScrollLink>
          <Link to="/about">
            <button className="hover:text-blue-600 dark:hover:text-blue-400">
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </button>
          </Link>
        </nav>

        {/* User Actions */}
        <div className="items-center hidden space-x-4 md:flex">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="px-4 py-2 text-gray-700 rounded hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 text-gray-700 rounded hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Logout
            </button>
          )}
          {/* Dark Mode Toggle */}
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
            <div className="w-8 h-4 bg-gray-300 rounded-full dark:bg-gray-600">
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Dark Mode
            </span>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white md:hidden dark:bg-gray-800">
          <nav className="flex flex-col p-4 space-y-2 text-gray-700 dark:text-gray-300">
             <div className="flex items-center justify-between mt-4">
            <span className="text-left text-gray-700 dark:text-gray-300">Dark Mode</span>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="hidden"
              />
              <div className="w-8 h-4 bg-gray-300 rounded-full dark:bg-gray-600">
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    isDarkMode ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </label>
          </div>
            <ScrollLink to="how-it-works" smooth={true} duration={500} onClick={toggleMenu}>
              <button className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400">
                How It Works
              </button>
            </ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500} onClick={toggleMenu}>
              <button className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400">
                Features
              </button>
            </ScrollLink>
            <Link to="/about" onClick={toggleMenu}>
              <button className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400">
                About Us
              </button>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <button className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </button>
            </Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={toggleMenu}>
                  <button className="w-full text-left rounded hover:bg-blue-100 dark:hover:bg-gray-700">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <button className="w-full text-left rounded hover:bg-blue-100 dark:hover:bg-gray-700">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="w-full px-4 py-2 text-left text-white bg-red-600 rounded hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
