/** @format */

import React from "react";

const PopularJobs = () => {
    const arr = [ 1 ,2 ,3 ,4  ,5]
  return (
    <div className="Popular_Jobs">
      <table>
        <tbody>
        {arr.map((i ,index) => (

        ))}
     
        </tbody>
      </table>
    </div>
  );
};

export default PopularJobs;
