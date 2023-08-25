/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";
// Css
import "./Css/Navbar.css";
import "./Css/Lap.css";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
