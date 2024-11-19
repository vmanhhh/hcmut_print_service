import React from 'react'
import './Footer.css'
import logob from "../../components/assets/logob.png";
import logow from "../../components/assets/logow.png";

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>VỀ CHÚNG TÔI</h2>
                    <img src={logow} alt="" />
                    <p>BK.Print - HCMUT Student Smart Printing Service</p>
                    {/* <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""></img>
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div> */}
                </div>
                <div className="footer-content-center">
                    <h2>BK.Print</h2>
                    <ul>
                        <li>Trang chủ</li>
                        <li>In file</li>
                        <li>Lịch sử</li>
                        <li>Upload tài liệu</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>LIÊN LẠC VỚI CHÚNG TÔI</h2>
                    <ul>
                        <li>+84 972-345-807</li>
                        <li>spso@hcmut.edu.vn</li>
                    </ul>
                </div>            
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 bkprint.hcmut.edu.vn - All Right Reserved
            </p>
        </div>
      )
}

export default Footer