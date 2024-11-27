import React from "react";
import Login from "../components/login/login";

const LoginPage = (handleLoginSuccess) => {
  return (
    <>
      <Login onLoginSuccess={handleLoginSuccess} />
    </>
  );
};
export default LoginPage;
