/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Banner from "../Component/Partial/Book-An-Event/Banner";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";

const BookAnEvent = () => {
  return (
    <div className="Book-An-Event">
      <Navbar />
      <Banner />
      {/* Contact Form */}

      <div className="Find_work_contact_form">
        <div className="left_container">
          <div className="About_Us">
            <div className="Three_Div">
              <div className="Item">
                <div className="upper">
                  <p className="head">
                    Corporate <br />
                    Events
                  </p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </p>

                <button>Learn More</button>
              </div>
              <div className="Item">
                <div className="upper second">
                  <p className="head">Private Party</p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </p>
                <button>Learn More</button>
              </div>
              <div className="Item">
                <div className="upper third">
                  <p className="head">Weddings</p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </p>

                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="contact-query-form">
            <h5 className="head">Book your Event </h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisi lacus, cursus pharetra ligula tempor, cursus maximus lectus.
              Curabitur eget felis sit amet tellus
            </p>
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
                <div style={{ width: "100%" }}>
                  <label>Any Comments</label>
                  <textarea placeholder="Type here........." />
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

      <div className="About_Us">
        <div className="Three_Div">
          <div className="Item">
            <div className="upper">
              <p className="head">
                Cocktail <br />
                Masterclass
              </p>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>

            <button>Learn More</button>
          </div>
          <div className="Item">
            <div className="upper second">
              <p className="head">Fun Night</p>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Learn More</button>
          </div>
          <div className="Item">
            <div className="upper third">
              <p className="head">Birthday Party</p>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Learn More</button>
          </div>
          <div className="Item">
            <div className="upper fourth">
              <p className="head">Theme Party</p>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className=""></div>
      <FAQ />
    </div>
  );
};

export default BookAnEvent;
