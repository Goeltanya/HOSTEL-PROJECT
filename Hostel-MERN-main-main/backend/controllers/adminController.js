// adminController.js
const User = require('../models/userModel');
const Room = require('../models/roomModel');

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get All Rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Add New Room
exports.addRoom = async (req, res) => {
    const { type, floor, isBooked } = req.body;

    try {
        const room = new Room({
            type,
            floor,
            isBooked
        });

        await room.save();
        res.json({ msg: 'Room added successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
    const { roomId } = req.params;

    try {
        const room = await Room.findByIdAndDelete(roomId);
        if (!room) {
            return res.status(404).json({ msg: 'Room not found' });
        }

        res.json({ msg: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
