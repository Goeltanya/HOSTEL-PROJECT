const express = require('express');

const userRoutes = require('./userRoutes');
const roomRoutes = require('./roomRoutes');
const feeRoutes = require('./feeRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const notificationRoutes = require('./notificationRoutes');
const adminRoutes = require('./adminRoutes');

const router = express.Router();

// Define route prefixes
router.use('/api/users', userRoutes);
router.use('/api/rooms', roomRoutes);
router.use('/api/fees', feeRoutes);
router.use('/api/attendance', attendanceRoutes);
router.use('/api/notifications', notificationRoutes);
router.use('/api/admin', adminRoutes);

module.exports = router;
