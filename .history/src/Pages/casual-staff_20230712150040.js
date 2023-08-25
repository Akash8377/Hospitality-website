/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CasualStaff = () => {
  return (
    <div className="casual-staff">
      <Navbar />

      {/* Banner */}
      <div className="Banner">
        <div className="content">
          <h2>Casual Staff</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Duis ut lectus pellentesque purus fermentum gravida. Integer
            accumsan feugiat diam, quis elementum arcu ultricies non. In odio
            ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget
            dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis
            dolor lacinia consectetur
          </p>
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="Community_Page">
        <div className="Find_work_contact_form">
          <div className="left_container">
            <div className="content">
              <h5>Our Services </h5>
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
              <h5>Front of House </h5>
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
              <h5>Back of House </h5>
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
                    <span>*</span> Mobile Phone Number
                  </label>
                  <input type="text" />
                </div>
              </div>

           

              <div className="mt-4">
                <p>
                  <span>*</span>Availibility to Call Back
                </p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy
                </p>
              </div>

              <Calendar />

              <div className="mt-4">
                <p>
                  <span>*</span> Select your Slot & Timings
                </p>
                <input type="text" />
              </div>

              <p className="Privacy">
                By submitting your details, you are giving us permission to
                contact you about our products and services..{" "}
                <span>View our Privacy Policy</span> .
              </p>

              <button className="submit-btn">SUBMIT</button>

              <p className="assistance">Need Assistance?</p>
              <button className="Whatsapp_Button">
                <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
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

export default CasualStaff;
