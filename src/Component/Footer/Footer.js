

import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Upper_Div">
        <div>
          <img src="./Image/9.png" alt="" />
        </div>
        {/* <Link to="/">
            <p>HOME</p>
          </Link> */}
        <div className="upper-div-1-1">
          <div>

            <p></p>

          </div>
          <div>

            <p>HOME</p>

          </div>
          <div>

            <p>About</p>

          </div>
          <div>

            <p>Follow Us</p>

          </div>
        </div>
      </div>

      <div className="lower_Div-1">
        <div className="lower-lower-1">
          <h6><div>
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.
          </div></h6>
          <div className="two_sec">
            <i className="fa-solid fa-phone"></i>
            <p>+91 9824324456</p>
          </div>
          <div className="two_sec">
            <i className="fa-solid fa-envelope"></i>
            <p>Home</p>
          </div>
          <div className="two_sec">
            <i className="fa-solid fa-location-dot"></i>
            <p>Our Story </p>
          </div>
          <div className="two_sec">
            <i className="fa-solid fa-location-dot"></i>
            <p>logo </p>
          </div>
          <p className="copyRight">Copyright reserved ©️ 2023</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
