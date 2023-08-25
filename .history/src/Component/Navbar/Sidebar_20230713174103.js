/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body>
      <div className="Navbar">
        <div className="main">
          <Link to="/">
            {" "}
            <img src="./Image/logo.png" alt="" />
          </Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/">Home</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/event-booking">Event Booking</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/courses">Courses</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/about-us">About Us</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="main Hide_On_Tab">
          <div>
            <input type={"search"} placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        
      </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bollean,
  handleClose: PropTypes.func,
};

export default Sidebar;
