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
    
    ></motion.div>
      <Navbar />
      <Banner />
      <HeadingCont
        title={"Who we Are?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <AboutUs />
      <HeadingCont
        title={"Popular Jobs"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <PopularJobSlider />
      <HeadingCont
        title={"Trending Services"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ServiceSlider />
      <HeadingCont
        title={" Client Reviews"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ReviewSlider />
      <div className="mt-5"></div>
      <HeadingCont
        title={"Staff Reviews"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ReviewSlider />
      <IndexBanner />
      <IndexBuisnessBanner />
      <LinkSection />
      <Footer />
    </>
  );
};

export default HomePage;
