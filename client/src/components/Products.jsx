import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import p1 from '../assets/SuperPallate.png';
import p2 from '../assets/MawaMix.png';
import p3 from '../assets/Supremegold.png';
import p4 from '../assets/doodhmalai.png';
import bg3 from "../assets/bg3.mov"; 

export const products = [   // ✅ Export products array also
  {
    id: 1,
    name: "Super Pellet",
    price: "₹850",
    image: p1,
    description: "High-protein pellet feed for cattle, ensuring better digestion and milk production.",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%" // ✅ Add nutrients
  },
  {
    id: 2,
    name: "Mava Mix ",
    price: "₹950",
    image: p2,
    description: "Nutritious blend of grains and minerals, enhancing cattle health and growth.",
    nutrients: "Protein 16%, Fiber 12%, Fat 3%, Calcium 1.1%, Phosphorus 0.7%"
  },
  {
    id: 3,
    name: "Supreme Gold ",
    price: "₹1,200",
    image: p3,
    description: "Balanced feed with essential vitamins and nutrients for high milk yield and energy.",
    nutrients: "Protein 20%, Fiber 9%, Fat 5%, Calcium 1.3%, Phosphorus 0.9%"
  },
  {
    id: 4,
    name: "Dudh Malai",
    price: "₹1,300",
    image: p4,
    description: "Premium quality feed enriched with minerals for optimal cattle performance.",
    nutrients: "Protein 22%, Fiber 8%, Fat 5%, Calcium 1.5%, Phosphorus 1.0%"
  },
];

const Product = () => {
  const navigate = useNavigate(); // ✅ Use navigate

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-72 lg:h-96 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bg3} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Premium Cattle Feed</h1>
          <p className="text-lg mt-2">High-quality feed for better nutrition & productivity</p>
        </div>
      </motion.div>

      {/* Products */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-5"
      >
        <div className="relative text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-20 inline-block relative">
            Our Products
            <span className="absolute left-1/2 bottom-[-5px] w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 transform -translate-x-1/2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleViewDetails(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              {/* <p className="text-xl font-bold text-green-600 mt-4">{product.price}</p> */}
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
                onClick={(e) => {
                  e.stopPropagation(); // ✅ Prevent parent click
                  handleViewDetails(product.id);
                }}
              >
                View Nutrient Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
