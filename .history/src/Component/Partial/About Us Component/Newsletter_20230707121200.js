/** @format */

import React from "react";

const Newsletter = () => {
  return (
    <div className="About-Us_Newsletter">
      <div className="left">
        <img src="./Image/12.png" alt="" />
      </div>
      <div className="right">
        <div className="content">
          <h5>Sign up for our e-newsletter</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mattis, neque laoreet porta imperdiet, ex dolor
            accumsan enim, sed convallis ligula erat elementum tellus. Maecenas
            eu convallis augue. Curabitur id a
          </p>

          <form>
            <div className="Two_Inputs">
              <div>
                <label><span>*</span>First Name</label>
                <input type="text" />
              </div>
              <div>
                <label><span>*</span>Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="Single">
              <div>
                <label><span>*</span>First Name</label>
                <input type="text" />
              </div>
              <div>
                <label><span>*</span>Last Name</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
