import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
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
      <div className="Review_Slider_Container">
        <Slider {...settings} ref={sliderRef} className="Review_Slider">
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
          <div className="Main">
            <div className="User_Profile">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <p className="head">David Johnson</p>
                <p className="desc">HEAD CHEF, LONDON</p>
              </div>
            </div>

            <div className="Reviews">
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>2 YEARS AGO</p>
            </div>

            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ultrices nibh id aliquam dictum. Nulla porttitor lectus odio,
                sit amet dapibus orci ultrices id. Proin nec enim et mauris
                luctus ultrices et sed neque. Fusce quis leo dapibus,
              </p>
            </div>
          </div>
        </Slider>
        <div className="Prev-Next_cont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 88 88"
            fill="none"
            onClick={prevSlide}
          >
            <circle
              cx="44"
              cy="44"
              r="43"
              fill="#F5A302"
              stroke="#F5A302"
              stroke-width="2"
            />
            <path
              d="M34.5858 45.4142C33.8047 44.6332 33.8047 43.3668 34.5858 42.5858L47.3137 29.8579C48.0948 29.0768 49.3611 29.0768 50.1421 29.8579C50.9232 30.6389 50.9232 31.9052 50.1421 32.6863L38.8284 44L50.1421 55.3137C50.9232 56.0948 50.9232 57.3611 50.1421 58.1421C49.3611 58.9232 48.0948 58.9232 47.3137 58.1421L34.5858 45.4142ZM39 46L36 46L36 42L39 42L39 46Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 88 88"
            fill="none"
            onClick={nextSlide}
          >
            <circle
              cx="44"
              cy="44"
              r="43"
              fill="#F5A302"
              stroke="#F5A302"
              stroke-width="2"
            />
            <path
              d="M50.4142 45.4142C51.1953 44.6332 51.1953 43.3668 50.4142 42.5858L37.6863 29.8579C36.9052 29.0768 35.6389 29.0768 34.8579 29.8579C34.0768 30.6389 34.0768 31.9052 34.8579 32.6863L46.1716 44L34.8579 55.3137C34.0768 56.0948 34.0768 57.3611 34.8579 58.1421C35.6389 58.9232 36.9052 58.9232 37.6863 58.1421L50.4142 45.4142ZM46 46L49 46L49 42L46 42L46 46Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
