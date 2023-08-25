/** @format */

import React from "react";
import { motion } from "framer-motion";

const HOC = ({ children }) => {
  return (
    <motion.div
      initial={{
        width: 0,
        transition: { duration: 5 },
      }}
      animate={{
        width: "100%",
        transition: { duration: 5 },  
      }}
      exit={{
        x: -window.innerWidth,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default HOC;
