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
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
     
      </Modal.Body>
    </Modal>
  );
}
