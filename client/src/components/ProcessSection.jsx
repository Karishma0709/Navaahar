import React from "react";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaCogs, FaChartLine } from "react-icons/fa";
import qcImg from "../assets/images/IMG_13.jpg"; // apni image import karo
import systemImg from "../assets/images/IMG_8.jpg";
import trackingImg from "../assets/images/IMG_4.jpg";

const processSteps = [
  {
    id: 1,
    title: "Step 1: Extensive QC",
    description:
      "Every product undergoes multiple rounds of rigorous quality control checks to ensure premium standards.",
    icon: <FaClipboardCheck />,
    image: qcImg,
  },
  {
    id: 2,
    title: "Step 2: Automated system",
    description:
      "We streamline operations using fully automated systems for maximum efficiency and minimal error.",
    icon: <FaCogs />,
    image: systemImg,
  },
  {
    id: 3,
    title: "Step 3: Tracking system for sales",
    description:
      "Our integrated tracking tools monitor sales in real-time, ensuring transparency and accountability.",
    icon: <FaChartLine />,
    image: trackingImg,
  },
];

const ProcessSection = () => {
  return (
    <div className="py-16 px-6 lg:px-12 bg-white">
      {/* ✅ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-green-700 mb-16"
      >
        Our Process
        <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
      </motion.h2>

      {/* ✅ Steps with Image */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* ✅ Text & Icon */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl shadow-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>

            {/* ✅ Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
