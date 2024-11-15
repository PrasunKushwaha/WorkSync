import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; // Correct import of AuthContext
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // Use AuthContext to get login status
  const { isLoggedIn, setAuthToken } = useContext(AuthContext); // Access login status and setAuthToken function

  const handleLogout = () => {
    // Remove token from localStorage and update context
    localStorage.removeItem('authToken');
    setAuthToken(null); // Set authToken to null to update context
    window.location.href = '/'; // Optionally, redirect to homepage or login page
  };

  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md dark:bg-gray-800">
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn.discordapp.com/attachments/777095273490546712/1305324808535543818/WorkSync.png?ex=67329df6&is=67314c76&hm=dbeca3f5333bc3978d75cb0764688c2ce8c658d6f29e8a70267e3c704fc4502c&"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">WorkSync</span>
        </div>
      </Link>
      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
        <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</a>
        <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        {/* Show Login and Sign Up buttons if not logged in */}
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 text-gray-700 rounded hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700">Login</button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Sign Up</button>
            </Link>
          </>
        ) : (
          // Show Logout button if logged in
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}

        {/* Toggle Switch for Dark Mode */}
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
                isDarkMode ? 'translate-x-4' : 'translate-x-0'
              }`}
            ></div>
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
        </label>
      </div>
    </header>
  );
};

export default Navbar;
