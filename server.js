// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const ExpressError = require("./utils/ExpressError");  
const userRoutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")
const cors = require('cors');


dotenv.config(); 
connectDB(); 

const app = express();




// Middleware
app.use(express.json()); 
app.use(cors());

// Route handling
app.use("/api/users", userRoutes);  
app.use("/api/jobs", jobRoutes);   

// Global Error Handler (handles errors thrown by ExpressError)
app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    // Custom error response (if error is instance of ExpressError)
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Generic server error (for all other errors)
  console.error(err);  // Log the error for debugging
  res.status(500).json({ error: "Something went wrong!" });  // Send a 500 response
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
