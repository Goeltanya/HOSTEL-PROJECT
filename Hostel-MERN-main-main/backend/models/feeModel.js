const mongoose = require('mongoose');

const FeeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    dueDate: { type: Date, required: true }
});

module.exports = mongoose.model('Fee', FeeSchema);
