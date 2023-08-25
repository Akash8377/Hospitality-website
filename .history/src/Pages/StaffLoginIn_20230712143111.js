/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { StaffLoginModal  } from "../Component/Modals/staff-login-modal";

const StaffLoginIn = () => {
  const [ modalShow , setModalShow] = useState(false)

  return (
    <>
    <StaffLoginIn show={modalShow} onHide={() => setModalShow(false)}
      <div className="Staff-Login-Container">
        <Navbar />
        <div className="Training_Course">
          <div className="Event_Booking-Banner">
            <div className="upper">
              <h5>Staff Log In</h5>
            </div>
          </div>

          <div className="contact-us-overflow-main">
            <div className="Content">
              <div className="contact-query-form">
                <form>
                  <h5 className="head">Enter your Credentials</h5>
                  <div className="two-inputs">
                    <div>
                      <label>
                        <span>*</span> First Name
                      </label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>
                        <span>*</span> Last Name
                      </label>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="checbox">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>

                  <Link to="/">
                    <button className="submit-btn">LOG IN</button>
                  </Link>
                  <p className="forget-password">
                    Forgot Password? <span>Reset Here</span>
                  </p>

                  <div className="empty-one">
                    <div className="empty"></div>
                    <p>OR</p>
                    <div className="empty"></div>
                  </div>

                  <p className="forget-password">
                    Don’t Have an account yet? <span>Register Here</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffLoginIn;
