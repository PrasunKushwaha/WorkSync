import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call for password reset
    if (email) {
      setMessage(
        "If the email exists, a password reset link has been sent to your email address."
      );
      setEmail(""); // Clear the email field
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Forgot Password
        </h1>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Enter your email address, and we’ll send you a link to reset your
          password.
        </p>

        {message && (
          <div className="p-3 text-sm text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-300">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center">
            <Link to="/login">
            <button
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to Login
          </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
