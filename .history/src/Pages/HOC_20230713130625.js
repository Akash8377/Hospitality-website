/** @format */

import React from "react";
import { motion } from "framer-motion";

const HOC = (props) => {
 
const AnimatedPage = ({ children }) => {
    return (
      <motion.div
        initial={{
          width: 0,
          transition: { duration: 1 },
        }}
        animate={{
          width: "100%",
        }}
        exit={{
          x: window.innerWidth,
          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>
    );
  };
export default HOC;
