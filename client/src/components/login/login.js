import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import styles from "./Login.module.css";
import logo from "./logo.jpg";
import { useNavigate } from "react-router-dom";

const SERVER_URI = "http://localhost:5001"; // Define the server URI

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (response) => {
    console.log("Login Success:", response);
    const token = response.credential;

    try {
      const res = await fetch(`${SERVER_URI}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Backend response data:", data);
        onLoginSuccess(data.user);
        navigate("/");
      } else {
        const errorText = await res.text();
        console.error("Login failed:", errorText);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
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