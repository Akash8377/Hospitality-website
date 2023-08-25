/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaffModal } from "../Modals/StaffModal";

const PopularJobSlider = () => {
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
      <div className="Service_Slider_Container Popular_Job_Slider">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc">Earn upto 12 - 15 £ per hour</p>

            <div className="content-div">
              <p className="head">Bartender</p>

            </div>
          </div>

          <div className="Main">
            <img src="./Image/59.png" alt="" />
            <p className="head">Head Chefs</p>
            <p className="desc">Earn upto 15 - 20 £ per hour</p>
          </div>
          <div className="Main">
            <img src="./Image/60.png" alt="" />
            <p className="head">Bartender</p>
            <p className="desc">Earn upto 20 - 25 £ per hour</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PopularJobSlider;
