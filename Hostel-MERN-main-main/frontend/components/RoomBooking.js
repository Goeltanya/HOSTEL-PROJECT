import React, { useState } from "react";
import axios from "axios";

const RoomBooking = () => {
  const [roomID, setRoomID] = useState("");
  const [userID, setUserID] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/bookings", {
        user_id: userID,
        room_id: roomID
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Booking failed!");
    }
  };

  return (
    <div>
      <h2>Book a Room</h2>
      <form onSubmit={handleBooking}>
        <input type="text" placeholder="User ID" onChange={(e) => setUserID(e.target.value)} required />
        <input type="text" placeholder="Room ID" onChange={(e) => setRoomID(e.target.value)} required />
        <button type="submit">Book</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default RoomBooking;
