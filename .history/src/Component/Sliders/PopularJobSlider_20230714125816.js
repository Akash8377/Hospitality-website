/** @format */

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventModal } from "../Modals/event-modal";
import { motion } from "framer-motion";

const PopularJobSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState(null);
  const [head, setHead] = useState(null);

  function ModalOpen(img, head) {
    setImg(img);
    setHead(head);
    setModalShow(true);
  }

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
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1500,
  };

  return (
    <>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        head={head}
      />

      <div className="Service_Slider_Container Popular_Job_Slider">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <motion.p
              className="head hideOnHover"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              Head Chefs
            </p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PopularJobSlider;
