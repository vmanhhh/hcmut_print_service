import React from "react";
import "./Header.css";
import background from "../assets/headerbackground.png";

const Header = () => {
  return (
    <div className="header">
      <img src={background} alt="" className="background_image" />
    </div>
  );
};

export default Header;