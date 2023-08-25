/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import PopularJobs from "../Component/Shared/popular-jobs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <HeadingCont title={} />
      <div className="Center_Heading">
        <h5></h5>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </p>
      </div>
      <AboutUs />
      <PopularJobs />
    </>
  );
};

export default HomePage;
