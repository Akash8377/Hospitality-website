/** @format */

import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="About_Us">
      <div className="Three_Div">
        <div className="Item">
          <div className="upper">
            <p className="head">
              Join Our <br /> Community
            </p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>

          <Link to="/community">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="Item">
          <div className="upper second">
            <p className="head">
              Client <br /> Relationship
            </p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>
          <Link to="/community">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="Item">
          <div className="upper third">
            <p className="head">Academy Bartending School</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>
          <Link to="/community">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
