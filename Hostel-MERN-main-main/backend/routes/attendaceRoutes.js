const express = require('express');
const { getAttendance, markAttendance } = require('../controllers/attendanceController');

const router = express.Router();

// Get attendance records
router.get('/attendance', getAttendance);

// Mark student attendance
router.post('/mark', markAttendance);

module.exports = router;
