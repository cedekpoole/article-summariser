import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children, x, y, duration }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: duration }}
      variants={{
        hidden: { opacity: 0, x: x, y: y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
