/** @format */

import React from "react";

const PopularJobs = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="Popular_Jobs">
      <table>
        <tbody>
          {arr.map((i) => (
            <>
              <tr key={i}>
                <td>
                  <span className="flex-cont">
                    <img src="./Image/logo.png" alt="" />
                    <p>Head Chef</p>
                  </span>
                </td>
                <td>
                  <span className="flex-vertical-cont">
                    <div>
                      <i className="fa-solid fa-calendar-days"></i>
                      <p> 20th Feb 2023</p>
                    </div>
                    <select>
                      <option>Select Duration</option>
                      <option> 2 Hours</option>
                      <option> 3 Hours</option>
                      <option> 4 Hours</option>
                      <option> 5 Hours</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span className="flex-vertical-cont">
                    <div>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>London</p>
                    </div>
                    <p>£400</p>
                  </span>
                </td>
                <td>
                  <span className="flex-cont">
                    <i className="fa-regular fa-bookmark"></i>
                    <button>Schedule a Call</button>
                  </span>
                </td>
              </tr>
                    <br />
               </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopularJobs;
