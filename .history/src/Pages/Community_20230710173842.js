/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import Banner from "../Component/Partial/Community Component/Banner";
import ContactForm from "../Component/Partial/Community Component/contact-form";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";

const Community = () => {
  return (
    <>
      <div className="Community_Page">
        <Navbar />
        <Banner />
        <ContactForm />
        <FAQ />
        <Newsletter />
      </div>
    </>
  );
};

export default Community;
