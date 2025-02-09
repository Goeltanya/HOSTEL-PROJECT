// feeController.js
const Fee = require('../models/feeModel');

// Get Fee Details
exports.getFeeDetails = async (req, res) => {
    try {
        const feeDetails = await Fee.find();
        res.json(feeDetails);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update Fee Status
exports.updateFeeStatus = async (req, res) => {
    const { userId, status } = req.body;

    try {
        let fee = await Fee.findOne({ userId });
        if (!fee) {
            return res.status(404).json({ msg: 'Fee record not found' });
        }

        fee.status = status;
        await fee.save();

        res.json({ msg: 'Fee status updated successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
