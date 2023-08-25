/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body className="Sidebar-Container">
        <div className="Close_Button">
          <i
            className="fa-solid fa-xmark"
            onClick={() => props.handleClose()}
          ></i>
        </div>

        <div className="Sidebar">
          <div className="main">
            <Link to="/" onClick={() => props.handleClose()}>
              {" "}
              <img src="./Image/logo.png" alt="" />
            </Link>
          </div>

          <div className="main">
            <Link to="/"   onClick={() => props.handleClose()}>Home</Link>
          </div>

          <div className="main ">
            <Link to="/event-booking"   onClick={() => props.handleClose()}>Event Booking</Link>
          </div>
          <div className="main ">
            <Link to="/courses"   onClick={() => props.handleClose()}>Courses</Link>
          </div>
          <div className="main ">
            <Link to="/about-us"   onClick={() => props.handleClose()}>About Us</Link>
          </div>

          <div className="main ">
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="main ">
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
