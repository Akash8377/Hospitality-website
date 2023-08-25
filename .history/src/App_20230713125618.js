/** @format */

import React from "react";
import { BrowserRouter, Route, Routes , useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import EventBooking from "./Pages/EventBooking";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import FindWork from "./Pages/FindWork";
import Staff from "./Pages/Staff";
import Courses from "./Pages/Courses";
import Community from "./Pages/Community";
import StaffLoginIn from "./Pages/StaffLoginIn";
import BookAnEvent from "./Pages/book-an-event";
import BookFullService from "./Pages/book-full-service";
import PermanentJob from "./Pages/permanent-job";
import CasualStaff from "./Pages/casual-staff";
import PermanentStaff from "./Pages/permanent-staff";
import ClientLoginIn from "./Pages/client-logIn";

// Css
import "./Css/Navbar.css";
import "./Css/Lap.css";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {



  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
