import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Hostel Management System</h1>
      <p>Manage your hostel bookings, fees, and notifications with ease.</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
