import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import p1 from '../assets/SuperPallate.png';
import p2 from '../assets/MawaMix.png';
import p3 from '../assets/Supremegold.png';
import p4 from '../assets/doodhmalai.png';

const products = [
  {
    id: 1,
    name: "Super Pellet ",
    price: "₹850",
    image: p1,
    nutrients: [
      "Crude Protein: 20%",
      "Fat: 4%",
      "Fiber: 12%",
      "Moisture: 10%",
    ],
  },
  {
    id: 2,
    name: "Mava Mix ",
    price: "₹950",
    image: p2,
    nutrients: [
      "Crude Protein: 18%",
      "Fat: 3.5%",
      "Fiber: 14%",
      "Moisture: 11%",
    ],
  },
  {
    id: 3,
    name: "Supreme Gold ",
    price: "₹1,200",
    image: p3,
    nutrients: [
      "Crude Protein: 22%",
      "Fat: 4.5%",
      "Fiber: 10%",
      "Moisture: 9%",
    ],
  },
  {
    id: 4,
    name: "Dudh Malai",
    price: "₹1,100",
    image: p4,
    nutrients: [
      "Crude Protein: 19%",
      "Fat: 4%",
      "Fiber: 13%",
      "Moisture: 10%",
    ],
  },
];

const ProductSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const settings = {
    // infinite: true,
    // speed: 1000,
    slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const handleProductClick = () => {
    navigate('/products'); // Redirect to /products page
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto py-16 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-700 mb-6 relative"
      >
        Our Products
        <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Slider {...settings}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4"
              onClick={handleProductClick} // Call the function on click
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-b-4 border-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Nutrient Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-lg text-gray-700 mb-4">{selectedProduct.price}</p>

            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {selectedProduct.nutrients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
