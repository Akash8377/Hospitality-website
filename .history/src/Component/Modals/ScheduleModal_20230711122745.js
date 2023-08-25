/** @format */

import { Modal } from "react-bootstrap";

export function ScheduleModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
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
            <div className="two_sec">
              <i className="fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="two_sec">
              <i className="fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>

            <p className="head">JOB DETAILS</p>

            <div className="Two-Sec">
              <div className="left-container">
                <i className="fa-solid fa-calendar"></i>
                <p>Posted on - </p>
              </div>
              <div className="right-container">
                <p>20th Feb 2023</p>
              </div>
            </div>

            <div className="Two-Sec">
              <div className="left-container">
                <i className="fa-solid fa-clock"></i>
                <p>Timings - </p>
              </div>
              <div className="right-container">
                <p>3 Hours </p>
              </div>
            </div>

            <div className="Two-Sec">
              <div className="left-container">
                <i className="fa-solid fa-money-bill"></i>
                <p>Salary - </p>
              </div>
              <div className="right-container">
                <p>£400</p>
              </div>
            </div>

            <div className="Two-Sec" style={{ display: "block" }}>
              <div className="left-container">
                <i className="fa-solid fa-location-dot"></i>
                <p>Location - </p>
              </div>
              <div className="right-container">
                <p>22nd Avenue, High Cross Street, London, UK</p>
              </div>
            </div>

            <img src="./Image/51.png" alt="" />
          </div>
          <div className="right">
            <i class="fa-solid fa-xmark"></i>
            <div className="content">
              <h5>Enter your Details</h5>

              <form>
                <div>
                  <p>
                    <span>*</span> Full Name
                  </p>
                  <input type="text" />
                </div>
                <div className="mt-2">
                  <p>
                    <span>*</span> Email Address
                  </p>
                  <input type="email" />
                </div>
                <div className="mt-2">
                  <p>
                    <span>*</span> Phone Number
                  </p>
                  <input type="tel" pattern="[0-9]{10}" />
                </div>
                <div className="mt-2">
                  <p>Date Of Birth</p>
                  <input type="date" />
                </div>
                <div className="mt-4">
                  <p>
                    <span>*</span>Address
                  </p>
                </div>

                <div className="two-input">
                  <div>
                    <p>Flat No.</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>Locality</p>
                    <input type="text" />
                  </div>
                </div>


                <div className="two-input">
                  <div>
                    <p>State</p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>Pin Code</p>
                    <input type="text" />
                  </div>
                </div>

                <div className="mt-4">
                  <p>
                    <span>*</span>Availibility to Call Back
                  </p>
                  <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                  </p>
                </div>



              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
