import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications'); // Fetch notifications data
        setNotifications(response.data);
      } catch (error) {
        console.log('Error fetching notifications');
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <p><strong>Time:</strong> {notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
