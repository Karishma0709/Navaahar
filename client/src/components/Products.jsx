import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

const products = [
  {
    id: 1,
    name: "Super Pellet Cattle Feed",
    price: "₹850",
    image: p1,
    description: "High-protein pellet feed for cattle, ensuring better digestion and milk production.",
  },
  {
    id: 2,
    name: "Mava Mix Cattle Feed",
    price: "₹950",
    image: p2,
    description: "Nutritious blend of grains and minerals, enhancing cattle health and growth.",
  },
  {
    id: 3,
    name: "Premium Cattle Feed",
    price: "₹1,200",
    image: p3,
    description: "Balanced feed with essential vitamins and nutrients for high milk yield and energy.",
  },
  {
    id: 4,
    name: "Elite Cattle Feed",
    price: "₹1,300",
    image: p4,
    description: "Premium quality feed enriched with minerals for optimal cattle performance.",
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      {/* ✅ Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="relative w-full h-72 lg:h-96"
      >
        <img
          src="https://via.placeholder.com/1500x500" // Replace with actual banner image
          alt="Cattle Feed Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Premium Cattle Feed</h1>
          <p className="text-lg mt-2">High-quality feed for better nutrition & productivity</p>
        </div>
      </motion.div>

      {/* ✅ Product Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        viewport={{ once: true }}
        className="py-20 px-5"
      >
        <div className="relative text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-10 inline-block relative">
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
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-600 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-xl font-bold text-green-600 mt-4">{product.price}</p>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
