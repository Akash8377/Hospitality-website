/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import Banner from "../Component/Partial/StaffComponent/Banner";
import TrainingCourse from "../Component/Partial/StaffComponent/TrainingCourse";

const Staff = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <TrainingCourse />
      <HeadingCont title={"Consultancy"} content={""} />
      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p></p>
      </div>
    </>
  );
};

export default Staff;
