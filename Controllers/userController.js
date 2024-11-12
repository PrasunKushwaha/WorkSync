// controllers/userController.js
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync"); 

// Register User
exports.registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    throw new ExpressError(400, "Please provide all required fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ExpressError(400, "User with this email already exists");
  }

  const user = new User({ name, email, password, role });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
});

// Login User
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ExpressError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new ExpressError(400, "Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});
