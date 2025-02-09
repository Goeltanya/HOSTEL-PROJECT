// notificationController.js
const Notification = require('../models/notificationModel');

// Send Notification
exports.sendNotification = async (req, res) => {
    const { userId, message } = req.body;

    try {
        const notification = new Notification({
            userId,
            message,
            date: new Date()
        });

        await notification.save();
        res.json({ msg: 'Notification sent successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get Notifications
exports.getNotifications = async (req, res) => {
    const { userId } = req.query;

    try {
        const notifications = await Notification.find({ userId });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
