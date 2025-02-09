import React, { useEffect, useState } from "react";
import axios from "axios";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("/api/rooms/available")
      .then(response => setRooms(response.data))
      .catch(error => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.room_number} - {room.type} - {room.availability ? "Available" : "Booked"}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
