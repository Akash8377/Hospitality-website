/** @format */

import React, { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import ServiceSlider from "../Component/Sliders/ServiceSlider";
import ReviewSlider from "../Component/Sliders/ReviewSlider";
import IndexBanner from "../Component/Partial/index-banner";
import IndexBuisnessBanner from "../Component/Partial/index-buisness-banner";
import Footer from "../Component/Footer/Footer";
import LinkSection from "../Component/Partial/LinkSection";
import PopularJobSlider from "../Component/Sliders/PopularJobSlider";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 0,
        }}
        exit={{
          width: 0,
        }}
      ></motion.div>
     
    </>
  );
};

export default HomePage;
