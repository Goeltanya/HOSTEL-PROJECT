import React, { useContext, useState } from "react";
import { RoomContext } from "../context/RoomContext";
import RoomList from "../components/RoomList";

const BookingPage = () => {
  const { rooms, bookRoom } = useContext(RoomContext);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBooking = () => {
    if (selectedRoom) {
      bookRoom(selectedRoom);
    }
  };

  return (
    <div className="booking-page">
      <h1>Book a Room</h1>
      <RoomList rooms={rooms} setSelectedRoom={setSelectedRoom} />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
