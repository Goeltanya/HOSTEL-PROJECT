const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
    // Get token from headers (Authorization)
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token and extract user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId);

        // Check if user exists
        if (!req.user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        next();  // User is authenticated, proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Middleware to check if the user has the 'admin' role
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied, admin privileges required' });
    }

    next();  // User is an admin, proceed to the next middleware or route handler
};

module.exports = { isAuthenticated, isAdmin };
