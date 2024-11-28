import logow from "../../assets/logow.png";
import './navbar.css';
import React, { useState } from 'react';

import RestorePageRoundedIcon from '@mui/icons-material/RestorePageRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { NavLink } from "react-router-dom";
import AccountPopup from '../accountPopup/accountPopup';


const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="navbar">
        <img src={logow} className="logo" alt="Logo" />
        <div className="navbar-options">
            <NavLink    to='/request' className="request">
                <RecentActorsIcon/>
                <li>Yêu cầu in</li>
            </NavLink>
            <NavLink    to='/log' className="log">
                <RestorePageRoundedIcon/>
                <li>Lịch sử</li>
            </NavLink>
            <NavLink    to='/printer' className="print">
                <LocalPrintshopIcon/>
                <li>Quản lý máy in</li>
            </NavLink>
        </div> 
         <div className="navbar-right">
                <CircleNotificationsIcon/>
               <div className="account-icon" onClick={togglePopup} ><AccountCircleRoundedIcon sx={{ fontSize: 60 }} /></div>
        </div>
        {isPopupVisible && (
        <div className='account-popup'>
          <AccountPopup/>
        </div>
      )}
    </div>
  );
}

export default Navbar;





// <img src={logow} className="logo" alt="Logo" />
// <ul className="nav-menu">
//     <div className="request">
//        <RecentActorsIcon/>
//         <li>Yêu cầu in</li>
//     </div>
//     <div className="log">
//    < RestorePageRoundedIcon/>
//         <li>Lịch sử</li>
//     </div>
//     <div className="print">
//         <LocalPrintshopIcon/>
//         <li>Quản lý máy in</li>
//     </div>
// </ul>
// <div className="navbar-right">
//     <CircleNotificationsIcon/>
//     <AccountCircleRoundedIcon sx={{ fontSize: 60 }} />
// </div>