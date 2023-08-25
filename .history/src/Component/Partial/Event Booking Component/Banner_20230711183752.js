/** @format */

import React from "react";
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="Event_Booking-Banner">
      <div className="upper">
        <h5>Event Booking</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <img src="./Image/13.png" alt="" />
            <h5>Book an Event with us</h5>
            <Link to='/book-an-event'>
            <button>
              <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
            </button>
            </Link>
       
          </div>
          <div className="content">
            <img src="./Image/14.png" alt="" />
            <h5>Book Full Bar Service</h5>
            <button>
              <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
