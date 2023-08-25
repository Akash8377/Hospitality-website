/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/About Us Component/Banner";
import ContentDescription from "../Component/Partial/About Us Component/content-description";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import TwoSection from "../Component/Partial/About Us Component/two-section";

const AboutUs = () => {
  return (
    <>
    <div className="page about-us-page">
    <Navbar />
      <Banner />
      <ContentDescription />
      <ContentDescription />
      <TwoSection />
      <Newsletter />
      <Footer />
    </div>
    
    </>
  );
};

export default AboutUs;
