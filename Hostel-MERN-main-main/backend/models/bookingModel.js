const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});

module.exports = mongoose.model('Booking', BookingSchema);
