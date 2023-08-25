/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";

const StaffLoginIn = () => {
  return (
    <>
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

                  <div>
                    
                  </div>

                  <button className="submit-btn">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffLoginIn;
