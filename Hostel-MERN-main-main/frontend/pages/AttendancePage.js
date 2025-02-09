import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('/api/attendance'); // Fetch attendance data
        setAttendance(response.data);
      } catch (error) {
        console.log('Error fetching attendance data');
      }
    };
    fetchAttendance();
  }, []);

  return (
    <div className="attendance-container">
      <h2>Attendance Records</h2>
      <div className="attendance-list">
        {attendance.map((entry) => (
          <div key={entry.id} className="attendance-item">
            <p>{entry.date}</p>
            <p>{entry.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;
