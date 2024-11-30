const express = require("express");
const {
  registerUser,
  loginUser,
  verifyEmail,
  changePassword,
  googleLogin,
  githubLogin,
} = require("../Controllers/userController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

// Auth Routes
router.post("/register", registerUser);  // Register a new user
router.post("/login", loginUser);  // Login existing user
router.get("/verify/:token", verifyEmail);  // Email verification
router.post("/change-password", validateToken, changePassword);  // Password change with token validation

// OAuth Routes for Google and GitHub
router.post("/google-login", googleLogin);  // Google login route (POST)
router.post("/github-login", githubLogin);  // GitHub login route (POST)

module.exports = router;