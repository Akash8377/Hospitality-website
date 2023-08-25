/** @format */

import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const HeadingCont = ({ title, content }) => {
  return (
    <div className="Center_Heading">
      <h5> {title} </h5>
      <p className="desc mt-2">{content}</p>
    </div>
  );
};

export default HeadingCont;


HeadingCont.propTypes = {
  title: PropTypes.func.isRequired,
  content: PropTypes.string,
};