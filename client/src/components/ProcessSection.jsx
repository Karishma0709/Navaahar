import React from "react";
import { motion } from "framer-motion";
import { FaClipboardCheck, FaCogs, FaChartLine } from "react-icons/fa";

const processSteps = [
  {
    id: 1,
    title: "Step 1: Extensive QC",
    description: "Every product undergoes multiple rounds of rigorous quality control checks to ensure premium standards.",
    icon: <FaClipboardCheck />,
  },
  {
    id: 2,
    title: "Step 2: ⁠Automated system",
    description: "We streamline operations using fully automated systems for maximum efficiency and minimal error.",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "Step 3: ⁠Tracking system for sales",
    description: "Our integrated tracking tools monitor sales in real-time, ensuring transparency and accountability.",
    icon: <FaChartLine />,
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

      {/* ✅ Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* ✅ Vertical Line in Middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full hidden lg:block"></div>

        {/* ✅ Process Steps */}
        <div className="flex flex-col space-y-12 relative">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* ✅ Left Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`w-1/2 p-6 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-xl font-bold text-green-800">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </motion.div>

              {/* ✅ Middle Icon with Vertical Connector */}
              <div className="relative flex flex-col items-center">
                {/* ✅ Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl shadow-lg z-10"
                >
                  {step.icon}
                </motion.div>

                {/* ✅ Vertical Line */}
                {index < processSteps.length - 1 && (
                  <div className="w-1 h-10 bg-green-500"></div>
                )}
              </div>

           

              {/* ✅ Right Empty Space */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
