/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const [services, setServices] = useState([]);

  const getServices = async () => {
    const url =
      "https://pritam-backend.vercel.app/api/v1/admin/getTrendingService";
    try {
      const { data } = await axios.get(url);
      console.log(data?.data);
      setServices(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
      getServices();
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
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <>
      <div className="Service_Slider_Container mt-5">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          {services?.map((ele, i) => (
            <>
              <div className="Main">
                <img src={ele?.image} alt="" />
                <p className="head">{ele?.title}</p>
                <Link to={`/courses/${ele?._id}`}>
                  <button>
                    LEARN MORE <i className="fa-solid fa-caret-right"></i>
                  </button>
                </Link>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ServiceSlider;
