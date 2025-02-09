import React from "react";
import RoomList from "../components/RoomList";

const RoomPage = () => {
  return (
    <div className="room-page">
      <h1>Available Rooms</h1>
      <RoomList />
    </div>
  );
};

export default RoomPage;
