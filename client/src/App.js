import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/login/login";
import InfoDialog from "./components/InfoDialog";
import BuyPaperPage from "./pages/BuyPaperPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Retrieve user information from localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setUser(user);
    setDialogOpen(true);
    // Store user information in localStorage
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/logout" element={<Navigate to="/" />} />
          <Route path="/buypaper" element={user ? <BuyPaperPage /> : <Navigate to="/login" />} />
         
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
      {user && (
        <InfoDialog open={dialogOpen} onClose={handleDialogClose} user={user} />
      )}
    </Router>
  );
}

export default App;