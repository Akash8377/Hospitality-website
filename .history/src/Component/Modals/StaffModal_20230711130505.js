/** @format */

import { Modal } from "react-bootstrap";

export function StaffModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Chef_Modal">
      <i className="fa-solid fa-xmark"></i>
      </Modal.Body>
    </Modal>
  );
}
