import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
  hidden: { opacity: 0, y: 20 },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.6 } }
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative text-gray-600 body-font flex items-center justify-center bg-cover bg-center h-screen md:h-90vh lg:h-4/5 xl:h-5/6"
      style={{
        backgroundImage: "url('https://www.fabhotels.com/blog/wp-content/uploads/2023/04/adelaide-oval.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col items-center text-center">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-white">
            Experience the Thrill of Cricket
            <br className="hidden lg:inline-block" />
            with CRICKO Organization
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-white">
            Join us for exciting cricket tournaments in various formats. Whether you're a player or a fan, we've got something for everyone. Discover the passion, skill, and excitement of cricket with CRICKO Organization.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/about"> {/* Use Link for navigation */}
              <motion.button
                whileHover="hover"
                variants={buttonVariants}
                className="inline-flex text-white bg-custom-blue border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-custom-blue/80 rounded"
              >
                Explore Tournaments
              </motion.button>
            </Link>
            <Link to="/contact"> {/* Use Link for navigation */}
              <motion.button
                whileHover="hover"
                variants={buttonVariants}
                className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-gray-200 rounded"
              >
                About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;