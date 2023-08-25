/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";


// Css
import "./Css/Navbar.css";
import "./Css/Lap.css";
import './Css/Responsive.css'
import './'

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
