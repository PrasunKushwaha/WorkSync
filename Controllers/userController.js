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

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();

  // Generate JWT token after successful registration
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET, // Make sure to set a JWT secret key in your environment variables
    { expiresIn: '1h' } // Token expires in 1 hour (you can adjust as needed)
  );

  res.status(201).json({
    message: "User registered successfully",
    token, // Send the generated token in the response
  });
});


// Login User
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ExpressError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ExpressError(400, "User not found");
  }

  // Log entered password and stored password hash
  console.log("Password entered by user:", password);
  console.log("Stored hashed password:", user.password);

  const isPasswordCorrect = await bcrypt.compare(password.trim(), user.password); // Trim password
  console.log("Password comparison result:", isPasswordCorrect); // Check result
  
  if (!isPasswordCorrect) {
    throw new ExpressError(400, "Incorrect password");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});
