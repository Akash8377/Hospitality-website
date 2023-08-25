/** @format */

import React from "react";
import { BrowserRouter} from "react-router-dom";

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
