import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/product1.png';
import p2 from '../assets/product2.png';
import p3 from '../assets/product3.png';
import p4 from '../assets/product4.png';

const products = [
  { id: 1, name: "Super Pellet Cattle Feed", price: "₹850", image: p1 },
  { id: 2, name: "Mava Mix Cattle Feed", price: "₹950", image: p2 },
  { id: 3, name: "Premium Cattle Feed", price: "₹1,200", image: p3 },
  { id: 4, name: "Organic Cattle Feed", price: "₹1,100", image: p4 },
  { id: 5, name: "Organic Cattle Feed", price: "₹1,100", image: p1 },
  { id: 6, name: "Organic Cattle Feed", price: "₹1,100", image: p2 },
];

const ProductSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto py-16 px-6 bg-white">
      {/* ✅ Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-700 mb-6 relative"
      >
        Our Products
        <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
      </motion.h2>

      {/* ✅ Product Slider with On-Scroll Animations */}
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
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-b-4 border-green-600 hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default ProductSlider;
