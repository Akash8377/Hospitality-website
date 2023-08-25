/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/About Us Component/Banner";
import ContentDescription from "../Component/Partial/About Us Component/content-description";
import TwoSection from "../Component/Partial/About Us Component/two-section";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ContentDescription />
      <ContentDescription />
      <TwoSection />
    </>
  );
};

export default AboutUs;
