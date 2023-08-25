/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body>
       
      </Offcanvas.Body>
    </Offcanvas>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bollean,
  handleClose: PropTypes.func,
};

export default Sidebar;
