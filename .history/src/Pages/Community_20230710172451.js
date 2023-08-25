/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/Community Component/Banner";
import ContactForm from "../Component/Partial/Community Component/contact-form";

const Community = () => {
  return (
    <>
      <div className="Community_Page">
        <Navbar />
        <Banner />
        <ContactForm />
      </div>
    </>
  );
};

export default Community;
