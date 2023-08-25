/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import PopularJobs from "../Component/Shared/popular-jobs";
import ServiceSlider from "../Component/Sliders/ServiceSlider";
import ReviewSlider from "../Component/Sliders/ReviewSlider";
import IndexBanner from "../Component/Partial/index-banner";
import IndexBuisnessBanner from "../Component/Partial/index-buisness-banner";
import Footer from "../Component/Footer/Footer";

const HomePage = () => {
  return (
    <>
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
      <PopularJobs />
      <HeadingCont
        title={"Trending Services"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ServiceSlider />
      <HeadingCont
        title={"Staff Reviews"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ReviewSlider />
      <HeadingCont
        title={"Client Reviews"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
      <ReviewSlider />
      <IndexBanner />
      <IndexBuisnessBanner />
      <Footer />
    </>
  );
};

export default HomePage;
