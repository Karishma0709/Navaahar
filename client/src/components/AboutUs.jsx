import React from 'react';
import { motion } from 'framer-motion';
import CattleFeedProduction from './CattleFeedProduction';
import MissionVision from './MissionVision';
// import img from '../assets/about.jpg';
import bg2 from "../assets/bg2.mov"; // ✅ Import video file

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* ✅ Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-80 lg:h-[400px] mt-20 overflow-hidden"
      >
        {/* ✅ Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bg2}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ✅ Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold uppercase"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg mt-3"
          >
            Dedicated to Premium Cattle Nutrition & Growth
          </motion.p>
        </div>
      </motion.div>

      {/* ✅ About Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto py-16 px-6 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img
            src={img}
            alt="Our Farm"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-extrabold text-green-700 relative">
            Who We Are
            <span className="block w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-10 mt-2"></span>
          </h2>
          <p className="text-gray-700 mt-4">
            We are pioneers in cattle nutrition, producing high-quality feed
            that enhances milk production and overall cattle health. Our mission
            is to revolutionize the dairy industry with sustainable and
            nutrient-rich cattle feed.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ Vision & Mission Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <MissionVision />
      </motion.div>

      {/* ✅ Cattle Feed Production Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CattleFeedProduction />
      </motion.div>
    </div>
  );
};

export default AboutUs;
