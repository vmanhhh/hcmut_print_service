
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import styles from "./Login.module.css";
import logo from "./logo.jpg";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Decode the JWT token to get user information
    const user = jwtDecode(response.credential);
    onLoginSuccess(user);
    // Redirect to home page
    navigate("/");
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
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

        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        <div className={styles.termPrivacy}>
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
