import logow from "../../components/assets/logow.png";
import "./Navbar.css";
import React from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import RestorePageRoundedIcon from "@mui/icons-material/RestorePageRounded";
import NoteAddRoundedIcon from "@mui/icons-material/NoteAddRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, onAccountClick }) => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (user) {
      onAccountClick();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <img src={logow} alt="" className="logo"></img>
      <ul className="nav-menu">
        <Link to="/" className="home">
          <div className="home">
            <HomeRoundedIcon />
            <li>Home</li>
          </div>
        </Link>
        <Link to="/print" className="print">
          <div className="print">
            <LocalPrintshopRoundedIcon />
            <li>In File</li>
          </div>
        </Link>
        <Link to="/log" className="log">
          <div className="log">
            <RestorePageRoundedIcon />
            <li>Lịch sử</li>
          </div>
        </Link>
        <Link to="/buypaper" className="buypaper">
          <div className="buypaper">
            <NoteAddRoundedIcon />
            <li>Mua giấy</li>
          </div>
        </Link>
      </ul>
      <div className="navbar-right">
        <CircleNotificationsIcon />
        <AccountCircleRoundedIcon sx={{ fontSize: 50 }} onClick={handleAccountClick} />
      </div>
    </div>
  );
};

export default Navbar;