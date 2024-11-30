const User = require("../Models/User"); // Importing the User model
const jwt = require("jsonwebtoken"); // JWT for token generation
const bcrypt = require("bcryptjs"); // bcrypt for password hashing
const { OAuth2Client } = require("google-auth-library"); // Google Auth Client
const axios = require("axios"); // Axios for GitHub OAuth
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Initialize the Google OAuth2 client

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      name,
      email,
      password: hashedPassword, // Save hashed password
      role: "candidate", // Default role can be adjusted
    });

    // Save the user to the database
    await user.save();

    // Generate a JWT token for the user
    const jwtToken = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "User registered successfully",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "User registration failed" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token for the user
    const jwtToken = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Login failed" });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, email } = ticket.getPayload();

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        name,
        email,
        password: "google-oauth-password", // Temporary password
        role: "candidate", // Default role
      });
      await user.save();
    }

    // Generate a JWT token for the user
    const jwtToken = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Google login successful",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Google login failed" });
  }
};

// GitHub Login
exports.githubLogin = async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange GitHub code for an access token
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { access_token } = response.data;

    // Get user information from GitHub using the access token
    const userInfo = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { login, email } = userInfo.data;

    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        name: login,
        email,
        password: "github-oauth-password", // Temporary password
        role: "candidate", // Default role
      });
      await user.save();
    }

    // Generate a JWT token for the user
    const jwtToken = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "GitHub login successful",
      token: jwtToken,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "GitHub login failed" });
  }
};

// Verify Email (for account activation, token sent via email)
exports.verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user and update their status to 'active'
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    user.active = true; // Mark as active after email verification
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

// Change Password
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id; // The user ID will be available from the token after authentication

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check if the old password matches
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Old password is incorrect" });
    }

    // Hash the new password and save
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Password change failed" });
  }
};
