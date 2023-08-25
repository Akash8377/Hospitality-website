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
              <div className="Three_Images">
                <img src="./Image/42.png" alt="" />
                <img src="./Image/43.png" alt="" />
                <img src="./Image/44.png" alt="" />
              </div>

              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
                congue efficitur id ut orci. Mauris volutpat tortor non lectus
                rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat
                nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla
                venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor,
                posuere mattis viverra vel, dignissim et augue. Suspendisse
                convallis nec neque et tincidunt. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae;
              </p>

              <button className="Learn_More_Button">LEARN MORE </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffLoginIn;
