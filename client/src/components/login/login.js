import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "./logo.jpg";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập mặc định
    if (username === "admin" && password === "admin") {
      onLoginSuccess(); // Gọi hàm cập nhật trạng thái đăng nhập
      navigate("/"); // Điều hướng về trang chủ
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng!"); // Hiển thị thông báo lỗi
    }
  };

  return (
    <section className="log-in" id="log-in">
      <div className="container">
        <p className="title">Log in</p>
        <div className="img">
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{
              width: "150px",
              height: "auto",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
        <div className="term-privacy">
          <p>
            By logging in, you agree to our{" "}
            <a href="/">Terms of use</a> and <a href="/">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
