const express = require('express');
const { getUsers, getRooms, addRoom, deleteRoom } = require('../controllers/adminController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

const router = express.Router();

// Protect routes: only accessible by authenticated admins
router.use(isAuthenticated);  // All routes below require authentication
router.use(isAdmin);  // Only accessible by admin users

// Get all users (admin only)
router.get('/users', getUsers);

// Get all rooms (admin only)
router.get('/rooms', getRooms);

// Add a new room (admin only)
router.post('/add-room', addRoom);

// Delete a room (admin only)
router.delete('/delete-room/:roomId', deleteRoom);

module.exports = router;
