import React from "react";
import ReactDOM from "react-dom/client";
import App from "./others/App";  // Correct path based on where App.js is stored
import "./style.css";  // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
