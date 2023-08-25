/** @format */

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export function FindStaffModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Find_Work_Modal">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <h6>Find Talented Staff</h6>
        <p className="desc">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </p>
      
        <div className="two-btn">
          <Link to="/find-work" style={{}}>
            <button>FIND TALENT NOW</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}
