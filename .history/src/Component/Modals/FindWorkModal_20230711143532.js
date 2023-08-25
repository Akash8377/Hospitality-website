/** @format */

import { Modal } from "react-bootstrap";

export function FindWorkModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Find_Work_Modal">
            <h6>Find Work</h6>
      </Modal.Body>
    </Modal>
  );
}
