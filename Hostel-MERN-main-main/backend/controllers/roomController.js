// roomController.js
const Room = require('../models/roomModel');

// Get All Rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Book Room
exports.bookRoom = async (req, res) => {
    const { roomId, userId } = req.body;

    try {
        let room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ msg: 'Room not found' });
        }

        if (room.isBooked) {
            return res.status(400).json({ msg: 'Room is already booked' });
        }

        room.isBooked = true;
        room.bookedBy = userId;
        await room.save();

        res.json({ msg: 'Room booked successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
