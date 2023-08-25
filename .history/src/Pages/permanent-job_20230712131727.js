/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const PermanentJob = () => {
  return (
    <>
      {" "}
      <div className="permanent-job">
        <Navbar />

        <div className="Banner AboutUs">
          <div className="content">
            <h2>Casual & Permanent Job</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Duis ut lectus pellentesque
              purus fermentum gravida. Integer accumsan feugiat diam, quis
              elementum arcu ultricies non. In odio ex, ultricies at urna eu,
              iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget
              dignissim urna. Sed at purus quis dolor lacinia consectetur
            </p>
          </div>
        </div>

        <div className="Register_Div " style={{ marginTop: "7%" }}>
          <div className="left_container">
            <h5>Register Online</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <button>Register Here </button>
          </div>

          <div className="right_container">
            <img src="./Image/78.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container second_container">
            <img src="./Image/79.png" alt="" />
          </div>
          <div className="left_container">
            <h5>Attend to Meet Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="left_container">
            <h5>Learn & Earn</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container third_container">
            <img src="./Image/80.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container fourth_container">
            <img src="./Image/81.png" alt="" />
          </div>
          <div className="left_container">
            <h5>Flexibility</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="left_container">
            <h5>Great Money</h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container five_container">
            <img src="./Image/82.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "5%" }}>
          <div className="right_container sixth_container">
            <img src="./Image/83.png" alt="" />
          </div>
          <div className="left_container">
            <h5>
              Have a Great Amazing <br /> Experience with us
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="contact-us-form">
          <h5>Enter your Details in the Form</h5>

            <div className="Form-Container">

            <div className="left-container">
                <img src="./Image/84.png" alt='' />
            </div>

            <div className="right-container">

                <form>
                    <div className="input-Div">
                    <i className="fa-regular fa-user"></i>
                    <input type='text' placeholder="Full Name" />
                    </div>

                    <div className="input-Div">
                    <i className="fa-regular fa-envelope"></i>
                    <input type='text' placeholder="Email Address" />
                    </div>

                    <div className="input-Div">
                    <i className="fa-solid fa-phone"></i>
                    <input type='text' placeholder="Phone Number" />
                    </div>

                    <div className="input-Div">
                    <i className="fa-solid  fa-location-dot"></i>
                    <input type='text' placeholder="Address" />
                    </div>


                    <div className="input-Div">
                    <i className="fa-solid fa-calendar"></i>
                    <input type='text' placeholder="Date of Birth" />
                    </div>


                    <button>Submit</button>

                </form>

                <p className="assit">Need Assistance?</p>

        <button className="whatsapp">
        <i className="fa-brands fa-whatsapp"></i>
        CONTACT US AT WHATSAPP
        </button>

            </div>


            </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default PermanentJob;
