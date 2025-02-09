import api from './api';

// Get fee details
export const getFeeDetails = async () => {
  try {
    const response = await api.get('/fee/details');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Pay fees
export const payFee = async (paymentData) => {
  try {
    const response = await api.post('/fee/pay', paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
