/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="main">
        <Link to="/">
          {" "}
          <img src="./Image/logo.png" alt="" />
        </Link>
      </div>

      <div className="main Hide_">
        <Link to="/">Home</Link>
      </div>

      <div className="main">
        <Link to="/event-booking">Event Booking</Link>
      </div>
      <div className="main">
        <Link to="/courses">Courses</Link>
      </div>
      <div className="main">
        <Link to="/about-us">About Us</Link>
      </div>

      <div className="main">
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="main">
        <div>
          <input type={"search"} placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="main">
        <Link to="/sign-in">
          <button>SIGN IN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
