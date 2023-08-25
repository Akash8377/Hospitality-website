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
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          mollis velit. Praesent pharetra, ipsum eget vestibulum eleifend, est
          sapien mollis erat, faucibus rhoncus purus tellus eget odio. Nam
          dapibus magna a neque luctus auctor quis quis diam. Donec viverra
          laoreet massa quis consectetur.
        </p>

        <div className="Down_Div">
          <div className="left">
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
        </div>
      </div>

      <div className="Main">
        <div className="Align_Center">
          <p style={{fontSize : '25px'}}>QUICK LINKS</p>
        </div>
        <div className="Align_Center mt-5">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/event-booking">
            <p>Event Booking</p>
          </Link>
        </div>

        <div className="Align_Center mt-4">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/event-booking">
            <p>Home</p>
          </Link>
        </div>
        <div className="Align_Center mt-4">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/courses">
            <p>Courses</p>
          </Link>
        </div>


        <div className="Align_Center mt-4">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/about-us">
            <p>About Us</p>
          </Link>
        </div>


        <div className="Align_Center mt-4">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/contact-us">
            <p>FAQ’S</p>
          </Link>
        </div>

        <div className="Align_Center mt-4">
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <div className="Main">
        <div className="Align_Center">
          <p style={{fontSize : '25px'}}>LOCATE US AT</p>
        </div>
        <img src="./Image/10.png" alt="" />
      </div>


      {/* <div className="right">
         
        </div> */}
      {/* <div className="Upper_Div">
        <div>
          <Link to="/">
            {" "}
            <p>HOME</p>
          </Link>
        </div>
       
      
        <div>
          <Link to="/contact-us">
            <button>CONTACT US</button>
          </Link>
        </div>
      </div>

      */}
    </div>
  );
};

export default Footer;
