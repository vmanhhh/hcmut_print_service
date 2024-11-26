import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "./logo.jpg";

const Login = () => {
  return (
    <section className="log-in" id="log-in">
      <div className="container">
        <p className="title">Log in</p>
        <div className="img">
          <img src={logo} alt="logo" className="logo"
            style={{
              width: "150px", 
              height: "auto", 
              transform: "scale(1.1)", 
              transition: "transform 0.3s ease",
            }}
          />
        </div>
        <form action="/login" method="POST">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="forgot-password">
            <a href="/">Forgot your password ?</a>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue <i className="fa fa-arrow-right"></i>
          </button>
        </form>
        <p>
          Don't have an account ? <Link to="/signup">Sign up</Link> to explore
          more!
        </p>
        <div className="term-privacy">
          <p>
            By clicking <b>Log in</b> or <b>Continue with</b>, you agree to our{" "}
            <a href="/">Terms of use</a> and <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
