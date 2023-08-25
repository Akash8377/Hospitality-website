/** @format */

import React from "react";

const PopularJobs = () => {
  return (
    <div className="Popular_Jobs">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="flex-cont">
                <img src="./Image/logo.png" alt="" />
                <p>Head Chef</p>
              </span>
            </td>
            <td>
              <span className="flex-cont">
                <div>
                  <i className="fa-solid fa-calendar-days"></i>
                  <p> 20th Feb 2023</p>
                </div>
                <select>
                  <option>Select Duration</option>
                  <option></option>
                </select>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PopularJobs;
