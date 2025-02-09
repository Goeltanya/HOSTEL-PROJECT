import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const FeeContext = createContext();

export const FeeProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [fees, setFees] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`/api/fees/${user.id}`)
        .then(response => setFees(response.data.fees))
        .catch(error => console.error("Error fetching fees:", error));
    }
  }, [user]);

  return (
    <FeeContext.Provider value={{ fees }}>
      {children}
    </FeeContext.Provider>
  );
};
