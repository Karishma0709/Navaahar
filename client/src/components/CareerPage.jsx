import React from "react";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* ✅ Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-80 lg:h-[400px] overflow-hidden"
      >
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
          <h1 className="text-5xl font-extrabold uppercase">Careers</h1>
          <p className="text-lg mt-3">Join us and shape the future of cattle nutrition</p>
        </div>
      </motion.div>

      {/* ✅ Career Section */}
      <div className="py-12 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700">Join Our Team</h2>
          <p className="text-gray-600 mt-2">
            Be a part of our journey in revolutionizing cattle nutrition.
          </p>
        </motion.div>

        {/* ✅ Job Openings Section */}
        <div className="max-w-4xl mx-auto grid gap-6">
          <JobCard title="Production Manager" location="Bhopal, M.P." type="Full-time" />
          <JobCard title="Quality Analyst" location="Indore, M.P." type="Part-time" />
          <JobCard title="Sales Executive" location="Remote" type="Full-time" />
        </div>

        {/* ✅ Apply Now Section */}
        <div className="text-center mt-12">
          <a
            href="mailto:hr@cattlefeed.com"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

// ✅ Job Card Component
const JobCard = ({ title, location, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600"
    >
      <h2 className="text-xl font-semibold text-green-700">{title}</h2>
      <p className="text-gray-600">{location} • {type}</p>
    </motion.div>
  );
};

export default CareerPage;
