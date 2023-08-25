/** @format */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FindWorkModal } from "../Modals/FindWorkModal";
import { FindStaffModal  } from "../Modals/FindStaffModal";

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ showModal , setShowModal ] = useState(false)
  return (
    <>
      <FindWorkModal show={modalShow} onHide={() => setModalShow(false)} />
      <FindStaffModal show={modalShow} onHide={() => setModalShow(false)} />
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
         
            <button onClick={() => setModalShow(true)}>
              {" "}
              <img src="./Image/1.svg" alt="" /> Find Work
            </button>
         
            <Link to="/staff">
              <button>
                {" "}
                <img src="./Image/1.svg" alt="" /> Find Talented Staff
              </button>
            </Link>
          </div>
          <Link to="/courses">
            <button className="Bottom_Button">
              {" "}
              <img src="./Image/1.svg" alt="" /> School for Bartending...JOIN
              NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
