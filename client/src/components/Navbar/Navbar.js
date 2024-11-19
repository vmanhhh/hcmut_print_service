import logob from "../../components/assets/logob.png";
import logow from "../../components/assets/logow.png";
import './Navbar.css'
import React from 'react'





const Navbar = () => {
  return (
    
    <div className="navbar">
        <img src={logow}  className="logo" ></img>
        <ul className="nav-menu">
            <div className="home">
                <div>home_icon</div>
                <li>Home</li>
            </div>
            <div className="print">
                <div>printer_icon</div>
                <li>In File</li>
            </div>
            <div className="log">
                <div>log_icon</div>
                <li>Lịch sử</li>
            </div>
            <div className="buypaper">
                <div>cart_icon</div>
                <li>Mua giấy</li>
            </div>
        </ul>
        <div className="navbar-right">
            <div>notify_icon</div>
            <img src={logob} className="account" ></img>
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