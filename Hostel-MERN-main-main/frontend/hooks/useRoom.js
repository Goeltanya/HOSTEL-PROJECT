import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import axios from "axios";

const useRoom = () => {
  const { rooms, setRooms } = useContext(RoomContext);

  const bookRoom = async (roomId, userId) => {
    try {
      const response = await axios.post("/api/rooms/book", { roomId, userId });
      setRooms((prevRooms) => prevRooms.map(room => 
        room.id === roomId ? { ...room, booked: true } : room
      ));
      return response.data;
    } catch (error) {
      console.error("Room booking failed:", error);
      return null;
    }
  };

  return { rooms, bookRoom };
};

export default useRoom;
