import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg1 from "../assets/bg1.mp4"; // ✅ Import video file

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh]  mt-20 flex flex-col items-center text-white">
      {/* ✅ Video Background */}
      <video
        className="absolute inset-0 w-full h-[70vh] object-cover"
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* ✅ Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl lg:text-6xl font-bold"
        >
          Welcome to Navaahar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-4 text-lg lg:text-xl max-w-2xl"
        >
          Providing high-quality nutrition for your livestock.
        </motion.p>

        {/* ✅ Animated Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(34, 197, 94, 0.7)" }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold relative overflow-hidden transition duration-300 hover:bg-green-700 group"
          onClick={() => navigate("/aboutus")}
        >
          <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-20 transition-all duration-300 group-hover:h-full"></span>
          <span className="relative z-10">Learn More</span>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
