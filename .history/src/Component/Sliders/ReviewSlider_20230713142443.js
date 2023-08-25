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
      } else if (window.innerWidth < 1450) {
        setSlidesToShow(3);
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
                src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch6CDHA9hqbe3GbIo6O0T-EWeIL7JJ8_cpQ&usqp=CAU"
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
                src="https://pbs.twimg.com/profile_images/1001332003474567169/vDCiE04W_400x400.jpg"
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
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
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
                src="https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY="
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

      </div>
    </>
  );
};

export default ReviewSlider;
