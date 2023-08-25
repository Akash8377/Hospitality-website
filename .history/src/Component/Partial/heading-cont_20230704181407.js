/** @format */

import React from "react";

const HeadingCont = ({ title, content }) => {
  return (
    <div className="Center_Heading">
      <h5> {title} </h5>
      <p className="desc">{content}</p>
    </div>
  );
};

export default HeadingCont;
