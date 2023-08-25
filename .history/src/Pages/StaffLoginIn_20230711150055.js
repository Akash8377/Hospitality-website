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
                <h5 className="head">Any more queries?</h5>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue effic
                </p>

                <form>
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
                  <div className="two-inputs mt-4">
                    <div style={{ width: "100%" }}>
                      <label>
                        <span>*</span> Email Address
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="two-inputs mt-4">
                    <div style={{ width: "100%" }}>
                      <label>
                        <span>*</span> Phone Number
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="two-inputs mt-4">
                    <div style={{ width: "100%" }}>
                      <label>Any Comments</label>
                      <textarea placeholder="Type here........." />
                    </div>
                  </div>

                  <p className="Privacy">
                    By submitting your details, you are giving us permission to
                    contact you about our products and services..{" "}
                    <span>View our Privacy Policy</span> .
                  </p>

                  <button className="submit-btn">SUBMIT</button>

                  <p className="assistance">Need Assistance?</p>
        

                 
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
