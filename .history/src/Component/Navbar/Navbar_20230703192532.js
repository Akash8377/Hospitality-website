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
          Home
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          About Us
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          Event Booking
        </Link>
      </div>
      <div className="main">
        <Link to="/">
          /p>
        </Link>
      </div>
      <div className="main">
       <div>
       <input type={"search"} placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass"></i>
       </div>
      </div>
      <div className="main">
        <button>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
