const express = require("express");
const dotenv = require("dotenv");
const connectDB = require(".//Config/db");
const ExpressError = require("./utils/ExpressError");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error(err);  // Log error for debugging
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
