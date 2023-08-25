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
        <p className="desc">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </p>
        <p className="desc">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </p>
        <div className="two-btn">
            <button></button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
