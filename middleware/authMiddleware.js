const jwt = require("jsonwebtoken");
const Job = require("../Models/Job");

// JWT Authentication Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, please log in" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden, invalid token" });
        }

        req.user = decoded;
        next();
    });
};

// Middleware to check if user is logged in (JWT-based)
module.exports.isLoggedIn = authMiddleware;

// Middleware to check if the logged-in user is the owner of the job listing
module.exports.isOwner = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        if (!job.employer.equals(req.user.id)) {
            return res.status(403).json({ message: "You don't have permission to edit this job." });
        }

        next(); // Proceed if user is the owner
    } catch (error) {
        next(error); // Forward error to the error handling middleware
    }
};
