/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/Book-An-Event/Banner";
import ContactForm from "../Component/Partial/Community Component/contact-form";

const BookAnEvent = () => {
  return (
    <div className="Book-An-Event">
      <Navbar />
      <Banner />
      {/* Contact Form */}

      <ContactForm />
    </div>
  );
};

export default BookAnEvent;
