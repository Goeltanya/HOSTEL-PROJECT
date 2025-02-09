import api from './api';

// Get notifications for a user
export const getNotifications = async () => {
  try {
    const response = await api.get('/notifications');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Mark a notification as read
export const markNotificationRead = async (notificationId) => {
  try {
    const response = await api.put(`/notifications/read/${notificationId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
