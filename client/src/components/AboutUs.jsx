import React from 'react';
import { motion } from 'framer-motion';
import CattleFeedProduction from './CattleFeedProduction';
import MissionVision from './MissionVision';
import img from '../assets/about.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* ✅ Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-80 lg:h-[400px] mt-20 overflow-hidden"
      >
        <img
          src="https://via.placeholder.com/1500x500"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white text-center px-4">
          <h1 className="text-5xl font-extrabold uppercase relative">
            About Us
           
           
          </h1>
          <p className="text-lg mt-3">Dedicated to Premium Cattle Nutrition & Growth</p>
        </div>
      </motion.div>

      {/* ✅ About Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto py-16 px-6 lg:px-12 space-y-8 lg:space-y-0 lg:space-x-20"
      >
        <div className="lg:w-1/2">
          <img
            src={img}
            alt="Our Farm"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-green-700 relative">
            Who We Are
            {/* ✅ Gradient Underline Effect */}
            <span className="block w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-10 mt-2"></span>
          </h2>
          <p className="text-gray-700 mt-4">
            We are pioneers in cattle nutrition, producing high-quality feed
            that enhances milk production and overall cattle health. Our mission
            is to revolutionize the dairy industry with sustainable and
            nutrient-rich cattle feed.
          </p>
        </div>
      </motion.div>

      {/* ✅ Vision & Mission Section */}
      <MissionVision />
      <CattleFeedProduction />
    </div>
  );
};

export default AboutUs;
