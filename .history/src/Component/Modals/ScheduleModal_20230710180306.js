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
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat quis tortor eget pharetra. Proin leo turpis, scelerisque
              vitae mattis et, porttitor in purus. Maecenas interdum ornare
              purus id
            </p>
            <div className="two_sec">
            <i className="fa-solid fa-check"></i>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
