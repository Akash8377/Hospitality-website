/** @format */

import React from "react";

const Queryform = () => {
  return (
    <div className="contact-query-form">
      <h5 className="head">Any more queries?</h5>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
        eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
        pharetra felis iaculis. Aenean in nisl eget lorem congue effic
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
          <div style={{width : '100%'}}>
            <label>
              <span>*</span> Email Address
            </label>
            <input type="text"  />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{width : '100%'}}>
            <label>
              <span>*</span> Phone Number
            </label>
            <input type="text"  />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{width : '100%'}}>
            <label>
            Any Comments
            </label>
            <textarea placeholder='Type here.........'  />
          </div>
        </div>
      </form>


      <p className="Privacy">
      By submitting your details, you are giving us permission to contact you about our products and services.. <span>View our Privacy Policy</span> .
      </p>
    </div>
  );
};

export default Queryform;
