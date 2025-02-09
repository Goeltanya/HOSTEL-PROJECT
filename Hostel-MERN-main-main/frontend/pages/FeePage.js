import React, { useContext } from "react";
import { FeeContext } from "../context/FeeContext";

const FeePage = () => {
  const { fees, payFee } = useContext(FeeContext);

  const handlePayment = () => {
    payFee();
  };

  return (
    <div className="fee-page">
      <h1>Manage Fees</h1>
      <ul>
        {fees.map((fee) => (
          <li key={fee.id}>{fee.name} - {fee.amount} Rs</li>
        ))}
      </ul>
      <button onClick={handlePayment}>Pay Fees</button>
    </div>
  );
};

export default FeePage;
