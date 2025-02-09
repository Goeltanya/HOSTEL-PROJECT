import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Welcome {user ? user.name : "Guest"}</h1>
      <div className="links">
        <Link to="/room-booking">Book a Room</Link>
        <Link to="/fees">Manage Fees</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </div>
  );
};

export default Dashboard;
