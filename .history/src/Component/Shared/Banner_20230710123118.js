/** @format */
import { } from 'react-router-dom'
import React from "react";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="content">
        <h2>
          Find & Hire Experts <br /> for any Job
        </h2>
        <p>
          Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
          <br />
          we've helped recruit excellent applicants over the years.
        </p>
        <div className="two_button">
        <Link
          <button>
            {" "}
            <img src="./Image/1.svg" alt="" /> Find Work
          </button>
          <button>
            {" "}
            <img src="./Image/1.svg" alt="" /> Find Talented Staff
          </button>
        </div>
        <button className="Bottom_Button">
          {" "}
          <img src="./Image/1.svg" alt="" /> School for Bartending...JOIN NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
