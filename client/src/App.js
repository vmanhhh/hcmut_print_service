import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Upload from "./components/Upload/upload";
import Navbar from "./components/Navbar/Navbar"; // Navbar cố định
import Footer from "./components/Footer/Footer"; // Footer cố định
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Quản lý trạng thái đăng nhập

  // Hàm xử lý đăng nhập thành công
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Navbar cố định */}
        <Navbar />

        {/* Các Routes chính */}
        <Routes>
          <Route
            path="/"
            element={<HomePage isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
          />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/upload" element={<Upload />} />
        </Routes>

        {/* Footer cố định */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
