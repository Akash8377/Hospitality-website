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
      </form>
    </div>
  );
};

export default Queryform;
