/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaffModal } from "../Modals/StaffModal";

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
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="Service_Slider_Container">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          
          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          
          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          
          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
       
        </Slider>
        <div className="Prev-Next_cont">
          <img src={""} onClick={prevSlide} className="PrevImg" alt="" />
          <img src={""} onClick={nextSlide} className="NextImg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
