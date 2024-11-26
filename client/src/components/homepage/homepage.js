import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

function HomePage({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  // Hàm xử lý chuyển đến trang Upload
  const handleStartPrinting = () => {
    navigate("/upload"); // Điều hướng đến trang Upload
  };

  return (
    <div className="homepage">
      {/* Nội dung chính */}
      <div className="homepage-content">
        <div className="welcome-banner">
          <h1>BK.Print</h1>
          <p>HCMUT Student Smart Printing Service</p>

          {/* Hiển thị nút dựa trên trạng thái đăng nhập */}
          {!isLoggedIn ? (
            <button className="start-button">
              <a href="/login" className="button-link">
                Đăng nhập/Đăng ký
              </a>
            </button>
          ) : (
            <button className="start-button" onClick={handleStartPrinting}>
              Bắt đầu in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
