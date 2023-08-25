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
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <div className="container">
            <div className="left"></div>
            <div className="right"></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
