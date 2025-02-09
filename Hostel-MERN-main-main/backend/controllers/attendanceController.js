// attendanceController.js
const Attendance = require('../models/attendanceModel');

// Get Attendance Records
exports.getAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.json(attendanceRecords);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Mark Attendance
exports.markAttendance = async (req, res) => {
    const { studentId, date, status } = req.body;

    try {
        let attendance = new Attendance({
            studentId,
            date,
            status
        });

        await attendance.save();
        res.json({ msg: 'Attendance marked successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
