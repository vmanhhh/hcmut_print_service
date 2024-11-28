import React, { useState } from "react";
import "./login.css";
import logo from "./logo.jpg";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle the login logic, e.g., send a request to the server
  };

  return (
    <section className={styles.loginBody} id="log-in">
      <div className={styles.container}>
        <p className={styles.title}>Log in</p>
        <div className={styles.img}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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