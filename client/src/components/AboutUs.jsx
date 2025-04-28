import React from "react";
import { motion } from "framer-motion";
import CattleFeedProduction from "./CattleFeedProduction";
import MissionVision from "./MissionVision";
import img from "../assets/about.jpg";
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
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bg2}
          autoPlay
          loop
          muted
          playsInline
        />
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

      {/* ✅ About Section (Improved Alignment) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center max-w-7xl mx-auto py-16 px-6 md:px-10 lg:px-16 space-y-10 md:space-y-0 md:space-x-10"
      >
        {/* ✅ Left Side - Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={img}
            alt="Our Farm"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </motion.div>

        {/* ✅ Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-extrabold text-green-700 relative">
            Who We Are
            <span className="block w-24 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto md:mx-0 mt-2"></span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            Navaahar Cattle Feed is a trusted name in the livestock nutrition
            sector, committed to delivering high-quality, nutrient-rich cattle
            feed that supports the health and productivity of livestock across
            the country. <br /><br />
            Established with the vision of enhancing animal health
            and supporting the dairy industry, Navaahar utilizes cutting-edge
            technology and sustainable practices to deliver premium cattle feed
            products. <br /><br />
            Our products are developed using carefully selected raw
            materials, ensuring consistency, freshness, and balanced nutrition
            in every batch. With a team of experienced nutritionists, veterinary
            experts, and quality control specialists, we maintain strict
            adherence to industry regulations and sustainable practices. <br /><br />
            Our advanced manufacturing facility is equipped to meet the growing
            demands of dairy and livestock farmers, ensuring timely delivery and
            product integrity. <br /><br />
            At Navaahar, we believe healthy livestock means
            prosperous farmers. That’s why we are not just feed manufacturers —
            we are partners in agricultural success, helping rural communities
            thrive through reliable, science-backed cattle nutrition.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ Vision & Mission Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <MissionVision />
      </motion.div>

      {/* ✅ Cattle Feed Production Section */}
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
