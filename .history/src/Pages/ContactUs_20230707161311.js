/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/Contact Us Components/Banner";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import OverflowingContent from "../Component/Partial/Contact Us Components/Overflowing-content";

const ContactUs = () => {
  return (
    <>
      <div style={{ backgroundColor: "#eee", height: "100%", width: "100%" }}>
        <Navbar />
        <Banner />
        <OverflowingContent />
        <FAQ />
      </div>
    </>
  );
};

export default ContactUs;
