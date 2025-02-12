import React from "react";
import { FaSeedling, FaLeaf, FaIndustry, FaTruck, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "1. Selecting Raw Materials",
    icon: <FaSeedling />,
    description: "Choose high-quality ingredients like corn, soybean meal, barley, and vitamins.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "2. Grinding & Mixing",
    icon: <FaLeaf />, // Fixed icon
    description: "Grind raw materials into small particles and mix evenly to maintain nutrition balance.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "3. Pelletizing Process",
    icon: <FaIndustry />,
    description: "Use a pellet machine to compress the mixture into uniform pellets for easy digestion.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "4. Quality Testing",
    icon: <FaCheckCircle />,
    description: "Check protein levels, moisture content, and hygiene standards before packaging.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "5. Packaging & Distribution",
    icon: <FaTruck />,
    description: "Pack the feed in airtight bags and distribute it to farmers and suppliers.",
    image: "https://via.placeholder.com/300",
  },
];

const CattleFeedProduction = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700">How to Produce Cattle Feed</h2>
        <p className="text-gray-600 mt-2">Step-by-step guide to making high-quality cattle feed.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <div className="text-4xl text-green-600">{step.icon}</div>
              <h3 className="text-xl font-bold mt-3">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
              <img src={step.image} alt={step.title} className="mt-4 rounded-lg w-full h-40 object-cover" />
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default CattleFeedProduction;
