/** @format */

import React from "react";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import UserSelection from "../Component/Partial/Sign In Component/user-selection";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <HeadingCont title={"Continue Signing In with"} content={""} />
      <UserSelection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default SignIn;
