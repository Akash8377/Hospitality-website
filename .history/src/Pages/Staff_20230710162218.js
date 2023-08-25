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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>
    </>
  );
};

export default Staff;
