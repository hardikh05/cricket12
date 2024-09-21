import React from "react";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
};

export const Contact = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 rounded-md border-2 border-custom-blue shadow-sm max-w-[760px] mx-auto my-8 bg-custom-bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.h5
        className="text-2xl font-semibold mb-4 text-center"
        variants={titleVariants}
      >
        About CRICKO Organization
      </motion.h5>
      <motion.div
        className="text-base leading-relaxed text-gray-700"
        variants={textVariants}
      >
        <p className="mb-4">
          CRICKO Organization is dedicated to promoting and organizing cricket tournaments at various levels. Our mission is to foster the spirit of cricket and provide a platform for teams to showcase their talents.
        </p>
        <p className="mb-4">
          Founded in 2010, we have successfully organized over 50 tournaments across different formats of the game. Our events are known for their professionalism, fair play, and exciting matches.
        </p>
        <p>
          We believe in the power of cricket to bring people together and create lasting memories. Join us in our journey to make cricket more accessible and enjoyable for everyone.
        </p>
      </motion.div>
    </motion.div>
  );
};