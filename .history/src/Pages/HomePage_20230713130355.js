/** @format */

import React, { useEffect } from "react";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import ServiceSlider from "../Component/Sliders/ServiceSlider";
import ReviewSlider from "../Component/Sliders/ReviewSlider";
import IndexBanner from "../Component/Partial/index-banner";
import IndexBuisnessBanner from "../Component/Partial/index-buisness-banner";
import LinkSection from "../Component/Partial/LinkSection";
import PopularJobSlider from "../Component/Sliders/PopularJobSlider";
import HOC from "./HOC";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
    </>
  );
};

export default HomePage


