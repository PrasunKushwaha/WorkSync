import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Link as ScrollLink} from 'react-scroll';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // Use AuthContext to get login status
  const { isLoggedIn, setAuthToken } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null); // Update context
    window.location.href = '/'; // Redirect to homepage or login page
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 bg-white shadow-md dark:bg-gray-800 ">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn.discordapp.com/attachments/777095273490546712/1305324808535543818/WorkSync.png?ex=6754e4f6&is=67539376&hm=171d2fa4e0723d2beda0cac20ffe383ce3c11a25d6784a0f0dda22051ed275e1&"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">WorkSync</span>
        </div>
      </Link>

      {/* Navigation Links */}
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
        </button></Link>
        
        <Link to="/contact">
        <button className="hover:text-blue-600 dark:hover:text-blue-400">
          Contact
        </button></Link>
      </nav>

      {/* User Actions and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
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
