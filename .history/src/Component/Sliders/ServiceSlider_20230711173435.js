/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link } from 'react-router-dom'

const ServiceSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <>
      <div className="Service_Slider_Container mt-5">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main">
            <img src="./Image/63.png" alt="" />
            <p className="head">Full Bar Service</p>
            <Link to='/courses'
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/66.png" alt="" />
            <p className="head">Event Booking</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/64.png" alt="" />
            <p className="head">
              Casual & Permanent <br />
              Staffing
            </p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/65.png" alt="" />
            <p className="head">Join Bar Academy</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/63.png" alt="" />
            <p className="head">Full Bar Service</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/66.png" alt="" />
            <p className="head">Event Booking</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/64.png" alt="" />
            <p className="head">
              Casual & Permanent <br />
              Staffing
            </p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/65.png" alt="" />
            <p className="head">Join Bar Academy</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ServiceSlider;
