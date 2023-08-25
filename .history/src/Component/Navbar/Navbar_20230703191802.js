/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="main">
        <img src="./Image/logo.png" alt="Logo" />
      </div>
      <div className="main">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          <p>About Us</p>
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          <p>Event Booking</p>
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          <p>Contact Us</p>
        </Link>
      </div>
      <div className="main">
            <input type={'search'} placeholder='Search...' />
       </div>
      <div className="main">
        <button>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
