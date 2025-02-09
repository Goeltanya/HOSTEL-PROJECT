const express = require('express');
const { getFeeDetails, updateFeeStatus } = require('../controllers/feeController');

const router = express.Router();

// Get fee details
router.get('/fees', getFeeDetails);

// Update fee status (paid, pending)
router.put('/update', updateFeeStatus);

module.exports = router;
