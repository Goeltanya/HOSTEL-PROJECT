import React, { useEffect, useState } from "react";
import axios from "axios";

const FeeManagement = ({ userID }) => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    axios.get(`/api/fees/${userID}`)
      .then(response => setFees(response.data.fees))
      .catch(error => console.error("Error fetching fees:", error));
  }, [userID]);

  return (
    <div>
      <h2>Your Fees</h2>
      <ul>
        {fees.map(fee => (
          <li key={fee.id}>
            Amount: Rs. {fee.amount} | Due Date: {fee.due_date} | Status: {fee.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeeManagement;
