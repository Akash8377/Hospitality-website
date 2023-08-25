/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Upper_Div">
        <div>
          <img src="./Image/9.png" alt="" />
        </div>
        <div>
          <Link to="/">
            {" "}
            <p>HOME</p>
          </Link>
        </div>
        <div>
        <Link to='/'></Link>
          <p>ABOUT US</p>
        </div>
        <div>
          <p>EVENT BOOKING</p>
        </div>
        <div>
          <button>CONTACT US</button>
        </div>
      </div>

      <div className="Down_Div">
        <div className="left">
          <h5>Information</h5>
          <div className="two_sec">
            <i className="fa-solid fa-phone"></i>
            <p>+91 9824324456</p>
          </div>
          <div className="two_sec">
            <i className="fa-solid fa-envelope"></i>
            <p>support@company.com</p>
          </div>
          <div className="two_sec">
            <i className="fa-solid fa-location-dot"></i>
            <p>22nd Avenue Street, UK</p>
          </div>
          <p className="copyRight">Copyright reserved ©️ 2023</p>
        </div>
        <div className="right">
          <img src="./Image/10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
