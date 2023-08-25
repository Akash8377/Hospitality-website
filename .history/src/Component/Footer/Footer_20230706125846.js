/** @format */

import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Upper_Div">
        <div>
          <img src="./Image/9.png" alt="" />
        </div>
        <div>
          <p>HOME</p>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;