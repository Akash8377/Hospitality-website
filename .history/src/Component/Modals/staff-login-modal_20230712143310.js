/** @format */

import { Modal } from "react-bootstrap";

export function StaffLoginModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="staff-login-modal">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <div className="container">
          <div className="left">
            <img src="./Image/52.png" alt="" />
          </div>
          <div className="right">
            <h5>Head-Chef</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat quis tortor eget pharetra. Proin leo turpis, scelerisque
              vitae mattis et, porttitor in purus. Maecenas interdum ornare
              purus id
            </p>

            <div className="small-C">
              <div className="two-sec">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>

              <div className="two-sec">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>

              <div className="two-sec">
                <i className="fa-solid fa-check"></i>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
