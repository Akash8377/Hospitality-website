/** @format */

import React from "react";
import { motion } from "framer-motion";

const HOC = ({ children }) => {
  return (
    <motion.div
      initial={{
        width: 0,
        x: "100%",
        transition: { duration: 0.5 },
      }}
      animate={{
        width: "100%",
        x: 0,
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
