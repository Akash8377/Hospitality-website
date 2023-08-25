/** @format */

import { Modal } from "react-bootstrap";

export function ScheduleModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Schedule_Modal">
        <div className="Container">
          <div className="left">
            <h6>Head Chef</h6>
            <p className="desc"></p>
          </div>
          <div className="right"></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
