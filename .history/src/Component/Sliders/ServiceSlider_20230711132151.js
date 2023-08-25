/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaffModal } from "../Modals/StaffModal";

const ServiceSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalShow, setModalShow] = useState(false);

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

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

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

  return (
    <>
      <StaffModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="Service_Slider_Container">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/5.png" alt="" />
            <p className="head">Waiter & Waitress</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>

          <div className="Main">
            <img src="./Image/33.png" alt="" />
            <p className="head">Head Chefs</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
          <div className="Main">
            <img src="./Image/34.png" alt="" />
            <p className="head">Bartender</p>
            <button onClick={() => setModalShow(true)}>
              LEARN MORE <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
        </Slider>
        <div className="Prev-Next_cont">
        <i className="fa-solid fa-angle-left" onClick={prevSlide}>
            {" "}
          </i>
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none" onClick={nextSlide}>
  <circle cx="44" cy="44" r="43" fill="#F5A302" stroke="#F5A302" stroke-width="2"/>
  <path d="M50.4142 45.4142C51.1953 44.6332 51.1953 43.3668 50.4142 42.5858L37.6863 29.8579C36.9052 29.0768 35.6389 29.0768 34.8579 29.8579C34.0768 30.6389 34.0768 31.9052 34.8579 32.6863L46.1716 44L34.8579 55.3137C34.0768 56.0948 34.0768 57.3611 34.8579 58.1421C35.6389 58.9232 36.9052 58.9232 37.6863 58.1421L50.4142 45.4142ZM46 46L49 46L49 42L46 42L46 46Z" fill="white"/>
</svg>
   
        
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
