"use client";
import { animate, motion } from "framer-motion";

const RotatingShape = ({ content, direction, duration }) => {
  // defin the roatation animation

  const roatationAnimation = {
    animate: {
      // rotate 360 degree on thi basis of direc
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration, // duraion of the full rotation
        ease: "linear", // smooth rotation
        repeat: Infinity, // infinity rotation
      },
    },
  };
  return (
    <motion.div variants={roatationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default RotatingShape;
