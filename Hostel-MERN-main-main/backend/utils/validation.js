// utils/validation.js

const Joi = require('joi');

// User registration validation
const validateUserRegistration = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'student', 'staff').required(),
  });

  return schema.validate(data);
};

// Room booking validation
const validateRoomBooking = (data) => {
  const schema = Joi.object({
    studentId: Joi.string().required(),
    roomId: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  });

  return schema.validate(data);
};

// Fee payment validation
const validateFeePayment = (data) => {
  const schema = Joi.object({
    studentId: Joi.string().required(),
    amount: Joi.number().positive().required(),
    paymentMethod: Joi.string().valid('credit_card', 'debit_card', 'upi', 'net_banking').required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateUserRegistration,
  validateRoomBooking,
  validateFeePayment,
};
