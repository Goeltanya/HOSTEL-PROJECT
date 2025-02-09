const express = require('express');
const { sendNotification, getNotifications } = require('../controllers/notificationController');

const router = express.Router();

// Send a notification
router.post('/send', sendNotification);

// Get notifications for a user
router.get('/get', getNotifications);

module.exports = router;
