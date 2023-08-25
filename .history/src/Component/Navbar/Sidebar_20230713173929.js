/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bollean.isRequired,
  handleClose: PropTypes.bollean.isRequired,
};


export default Sidebar;

