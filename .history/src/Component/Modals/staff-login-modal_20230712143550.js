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
          <p>Enter Your Details</p>
          <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        </div>

        <form>
          <div className="two-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> First Name{" "}
              </p>
              <input type="text" />
            </div>

            <div className="item">
              <p>
                {" "}
                <span>*</span> Last Name{" "}
              </p>
              <input type="text" />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> First Name{" "}
              </p>
              <input type="text" />
            </div>

       
          </div>

          
        </form>
      </Modal.Body>
    </Modal>
  );
}
