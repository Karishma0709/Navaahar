import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaHeadset, FaRupeeSign, FaLeaf } from "react-icons/fa";
import why from "../assets/why.jpeg"; // Ensure this path is correct

const reasons = [
  { id: 1, title: "Quality Assurance", description: "We ensure top-notch quality in all our products.", icon: <FaShieldAlt className="text-yellow-500 text-3xl" /> },
  { id: 2, title: "Customer Support", description: "24/7 dedicated support for all your needs.", icon: <FaHeadset className="text-yellow-500 text-3xl" /> },
  { id: 3, title: "Affordable Pricing", description: "Premium quality at the best market prices.", icon: <FaRupeeSign className="text-yellow-500 text-3xl" /> },
  { id: 4, title: "Eco-Friendly", description: "Committed to sustainable and green practices.", icon: <FaLeaf className="text-yellow-500 text-3xl" /> },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="py-16 px-6 lg:px-12 bg-green-50">
      {/* ✅ Heading with Gradient Underline */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-700 mb-6 relative"
      >
        Why Choose Us?
        <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center relative">
        {/* ✅ Left Reasons (Boxed) */}
        <div className="space-y-8">
          {reasons.slice(0, 2).map((reason) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: reason.id * 0.2 }}
              className="max-w-sm flex items-center gap-4 bg-white shadow-md p-4 rounded-lg border-l-4 border-green-600 transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-yellow-500"
            >
              {reason.icon}
              <div>
                <h3 className="text-xl font-semibold text-green-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Center Image with Fixes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-10 my-8 flex justify-center"
        >
          <img
            src={why}
            alt="Why Choose Us"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover overflow-hidden"
          />
        </motion.div>

        {/* ✅ Right Reasons (Boxed) */}
        <div className="space-y-8">
          {reasons.slice(2).map((reason) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: reason.id * 0.2 }}
              className="max-w-sm flex items-center gap-4 bg-white shadow-md p-4 rounded-lg border-l-4 border-green-600 transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:border-yellow-500"
            >
              {reason.icon}
              <div>
                <h3 className="text-xl font-semibold text-green-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
