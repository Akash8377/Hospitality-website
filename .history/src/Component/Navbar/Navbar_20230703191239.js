/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img src="./Image/logo.png" alt="Logo" />
      </div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div>
        <Link to="/">
          <p>About Us</p>
        </Link>
      </div>
      <div>
        <Link to="/">
          <p>Event Booking</p>
        </Link>
      </div>
      <div>
        <Link to="/">
          <p>HContact Usome</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
