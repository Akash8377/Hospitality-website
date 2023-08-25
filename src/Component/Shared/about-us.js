/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutUs = () => {
  const [who, setWho] = useState([]);
  const getWho = async () => {
    const url = "https://pritam-backend.vercel.app/api/v1/admin/getWhoWeare";
    try {
      const { data } = await axios.get(url);
      console.log("3wrefr", data?.data);
      setWho(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getWho();
  }, []);
  return (
    <div className="About_Us">
      <div className="Three_Div">
        {
          who?.map((ele,i)=>(
            <>
              <div className="Item">
                <div className="upper">
                  <img className="upperImage" src={ele?.image} alt="" />
                  <p className="head">
                    {ele?.type}
                    {/* Join Our <br /> Community */}
                  </p>
                </div>
                <p className="desc">
                  {ele?.title}
                </p>

                <Link to={`/community/${ele?._id}`}>
                  <button>Learn More</button>
                </Link>
              </div>        
            </>
          ))
        }
        {/* <div className="Item">
          <div className="upper">
            <img className="upperImage" src="./Image/2.png" alt="" />
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
            <img className="upperImage" src="./Image/31.png" alt="" />
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
            <img className="upperImage" src="./Image/32.png" alt="" />
            <p className="head">Academy Bartending School</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>
          <Link to="/community">
            <button>Learn More</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
