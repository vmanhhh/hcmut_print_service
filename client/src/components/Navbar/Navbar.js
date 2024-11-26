import logob from "../../components/assets/logob.png";
import logow from "../../components/assets/logow.png";
import './Navbar.css'
import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import RestorePageRoundedIcon from '@mui/icons-material/RestorePageRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar = () => {
  return (
    
    <div className="navbar">
        <img src={logow}  className="logo" ></img>
        <ul className="nav-menu">
            <div className="home">
                <HomeRoundedIcon/>
                <li>Home</li>
            </div>
            <div className="print">
                <LocalPrintshopRoundedIcon/>
                <li>In File</li>
            </div>
            <div className="log">
                <RestorePageRoundedIcon/>
                <li>Lịch sử</li>
            </div>
            <div className="buypaper">
                <NoteAddRoundedIcon/>
                <li>Mua giấy</li>
            </div>
        </ul>
        <div className="navbar-right">
            <CircleNotificationsIcon/>
            <AccountCircleRoundedIcon sx={{ fontSize: 50 }} />

        </div>
        
    </div>
  )
}

export default Navbar



{/* <div class="header">
<div class="logo">
    <img src="logow.png" alt="Logo"></img>
    BK_Print
</div>
<div class="nav">
    <a href="#" class="nav-item"><img src="home-icon.png" alt="Home">Trang chủ</a>
    <a href="#" class="nav-item"><img src="print-icon.png" alt="Print">In File</a>
    <a href="#" class="nav-item"><img src="history-icon.png" alt="History">Lịch sử</a>
    <a href="#" class="nav-item"><img src="shop-icon.png" alt="Shop">Mua giấy</a>
</div>
<div class="nav">
    <a href="#" class="nav-item"><img src="notification-icon.png" alt="Notifications"></img> </a>
    <a href="#" class="nav-item"><img src="user-icon.png" alt="User"></img> </a>
</div>
</div> */}