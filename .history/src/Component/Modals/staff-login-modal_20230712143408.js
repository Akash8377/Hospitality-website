/** @format */

import { Modal } from "react-bootstrap";

export function StaffLoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="staff-login-modal">
        <div className="Header">
          <p></p>
          <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        </div>
      </Modal.Body>
    </Modal>
  );
}
