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

      <div className="Community_Page">
        <div className="Find_work_contact_form">
          <div className="left_container">
            <div className="content">
              <h5>Lorem ipsum </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
                congue efficitur id ut orci. Mauris volutpat tortor non lectus
                rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat
                nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla
                venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor,
                posuere mattis viverra vel, dignissim et augue.
              </p>
            </div>
            <div className="content mt-5">
              <h5>Lorem ipsum </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
                congue efficitur id ut orci. Mauris volutpat tortor non lectus
                rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat
                nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla
                venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor,
                posuere mattis viverra vel, dignissim et augue.
              </p>
            </div>
            <div className="content mt-5">
              <h5>Lorem ipsum </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
                congue efficitur id ut orci. Mauris volutpat tortor non lectus
                rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat
                nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla
                venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor,
                posuere mattis viverra vel, dignissim et augue.
              </p>
            </div>
          </div>

          <div className="right_container">
            <div className="content">
              <h5>Contact Us</h5>
              <p>Use the form below to get in touch.</p>
            </div>

            <div className="contact-query-form">
              <form>
                <div className="two-inputs">
                  <div>
                    <label>
                      <span>*</span> First Name
                    </label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>
                      <span>*</span> Last Name
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="two-inputs mt-4">
                  <div style={{ width: "100%" }}>
                    <label>
                      <span>*</span> Email Address
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="two-inputs mt-4">
                  <div style={{ width: "100%" }}>
                    <label>
                      <span>*</span> Phone Number
                    </label>
                    <input type="text" />
                  </div>
                </div>

                <div className="two-inputs mt-4">
                  <div>
                    <label>
                      <span>*</span> Nearest Region
                    </label>
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      <span>*</span> I’m interested in
                    </label>{" "}
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                </div>

                <p className="Privacy">
                  By submitting your details, you are giving us permission to
                  contact you about our products and services..{" "}
                  <span>View our Privacy Policy</span> .
                </p>

                <button className="submit-btn">SUBMIT</button>

                <p className="assistance">Need Assistance?</p>
                <button className="Whatsapp_Button">
                  <i className="fa-brands fa-whatsapp"></i> CONTACT US AT
                  WHATSAPP
                </button>

                <div className="contact_Detail">
                  <p>Or Call us at </p>
                  <i className="fa-solid fa-phone"></i>
                  <p>+44 1234567890</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnEvent;
