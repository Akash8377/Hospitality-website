/** @format */

import React from "react";

const OverFlowingComp = () => {
  return (
    <div className="courses_overflow">
      <div className="Contact-Us_Banner">
        <div className="content">
          <h2>School for Bartending....JOIN NOW!!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis.
          </p>
        </div>
      </div>

      <div className="contact-us-overflow-main">
        <div className="Content">
          <div className="Main">
            <h5>Explore Our Courses</h5>
          </div>

          <div className="office_images">
            <div className="container">
              <img src="./Image/46.png" alt="" />
              <p>Lorem Ipsum</p>
            </div>
            <div className="container">
              <img src="./Image/46.png" alt="" />
              <p>Lorem Ipsum</p>
            </div>
            <div className="container">
              <img src="./Image/46.png" alt="" />
              <p>Lorem Ipsum</p>
            </div>
          </div>

          <div className="icon-div">
            <div className="left">
              <div className="container">
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent nisi lacus, cursus pharetra
                </p>
              </div>
              <div className="container mt-3">
                <i className="fa-solid fa-calendar-days"></i>
                <p>Date - 24/08/2023</p>
              </div>
              <div className="container mt-1">
                <i className="fa-solid fa-tag"></i>
                <p>Price - 400£</p>
              </div>
              <div className="container mt-1">
                <i className="fa-solid fa-hourglass-start"></i>
                <p>Duration - 6 Months</p>
              </div>
              <div className="container mt-1">
                <button>Learn More</button>
              </div>
            </div>
          </div>

          <div className="office_images">
            <div className="container">
              <img src="./Image/19.png" alt="" />
              <p>New Delhi</p>
            </div>
            <div className="container">
              <img src="./Image/20.png" alt="" />
              <p>Pune</p>
            </div>
          </div>

          <div className="icon-div">
            <div className="left">
              <div className="container">
                <i className="fa-solid fa-phone" />
                <p>+91 9824324456</p>
              </div>
              <div className="container mt-4">
                <i className="fa-solid fa-envelope" />
                <p>support@company.com</p>
              </div>
              <div className="container mt-4">
                <i className="fa-solid fa-location-dot" />
                <p>22nd Avenue Street, UK</p>
              </div>
              <div className="container mt-4">
                <button>Learn More</button>
              </div>
            </div>

            <div className="left" style={{ paddingLeft: "50px" }}>
              <div className="container">
                <i className="fa-solid fa-phone" />
                <p>+91 9824324456</p>
              </div>
              <div className="container mt-4">
                <i className="fa-solid fa-envelope" />
                <p>support@company.com</p>
              </div>
              <div className="container mt-4">
                <i className="fa-solid fa-location-dot" />
                <p>22nd Avenue Street, UK</p>
              </div>
              <div className="container mt-4">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverFlowingComp;
