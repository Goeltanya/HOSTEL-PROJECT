import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { FeeProvider } from "./context/FeeContext";
import { NotificationProvider } from "./context/NotificationContext";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import RoomBookingPage from "./RoomBookingPage";
import FeePage from "./FeePage";
import AttendancePage from "./AttendancePage";
import NotificationsPage from "./NotificationsPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <RoomProvider>
        <FeeProvider>
          <NotificationProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/room-booking" element={<RoomBookingPage />} />
                <Route path="/fees" element={<FeePage />} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
              </Routes>
              <Footer />
            </Router>
          </NotificationProvider>
        </FeeProvider>
      </RoomProvider>
    </AuthProvider>
  );
};

export default App;
