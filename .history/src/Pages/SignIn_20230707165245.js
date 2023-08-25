/** @format */

import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import HeadingCont from "../Component/Partial/heading-cont";
import UserSelection from "../Component/Partial/Sign In Component/user-selection";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <HeadingCont title={"Continue Signing In with"} content={""} />
      <UserSelection />
    </>
  );
};

export default SignIn;
