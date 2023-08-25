/** @format */

import React from "react";
import { BrowserRouter } from "react-router-dom";
// Css
import "./Css/Navbar.css";
import "./Css/Lap.css";

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
