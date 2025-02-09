import React, { useEffect, useState } from "react";
import { getUsers } from "../api/adminApi";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
