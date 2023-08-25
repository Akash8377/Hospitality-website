/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/About Us Component/Banner";
import ContentDescription from "../Component/Partial/About Us Component/content-description";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import TwoSection from "../Component/Partial/About Us Component/two-section";
import $ from 'jquery';
import 'turn.js';
import 'turn.js/css/turn.css';

const AboutUs = () => {
  return (
    <>
    <div >
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
