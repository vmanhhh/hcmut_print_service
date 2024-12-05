import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./login.css";
import logo from "./logo.jpg";

const Login = () => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Handle the login success, e.g., save the token, fetch user info, etc.
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
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
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        <div className="term-privacy">
          <p>
            By clicking <b>Continue with Google</b>, you agree to our{" "}
            <a href="/">Terms of use</a> and <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;