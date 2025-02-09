import api from './api';

// Get available rooms
export const getAvailableRooms = async () => {
  try {
    const response = await api.get('/rooms/available');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Book a room
export const bookRoom = async (bookingData) => {
  try {
    const response = await api.post('/rooms/book', bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
