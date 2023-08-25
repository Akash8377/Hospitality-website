/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Main">
        <div className="upper">
          <Link to="/">
            <img src="./Image/9.png" alt="" />
          </Link>

          <Link to="/about-us">
            <p>ABOUT US</p>
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          mollis velit. Praesent pharetra, ipsum eget vestibulum eleifend, est
          sapien mollis erat, faucibus rhoncus purus tellus eget odio. Nam
          dapibus magna a neque luctus auctor quis quis diam. Donec viverra
          laoreet massa quis consectetur.
        </p>
      </div>

      <div className="Main"></div>

      <div className="Main"></div>

      {/* <div className="Upper_Div">
        <div>
          <Link to="/">
            {" "}
            <p>HOME</p>
          </Link>
        </div>
       
        <div>
          <Link to="/event-booking">
            <p>EVENT BOOKING</p>
          </Link>
        </div>
        <div>
          <Link to="/contact-us">
            <button>CONTACT US</button>
          </Link>
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
      </div> */}
    </div>
  );
};

export default Footer;
