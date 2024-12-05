import React, { useState } from "react";
import "./login.css";
import logo from "./logo.jpg";
import { login } from "../../api"; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await login({ username, password });
      localStorage.setItem('userToken', user.token); // Save the token in localStorage
      onLoginSuccess(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Successfully logged in");
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
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        <div className="term-privacy">
          <p>
            By logging in, you agree to our{" "}
            <a href="/">Terms of use</a> and <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
