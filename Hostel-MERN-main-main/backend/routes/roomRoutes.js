const express = require('express');
const { getRooms, bookRoom } = require('../controllers/roomController');

const router = express.Router();

// Get all available rooms
router.get('/rooms', getRooms);

// Book a room
router.post('/book', bookRoom);

module.exports = router;
