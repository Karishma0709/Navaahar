import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import p1 from "../assets/SuperPallate.png";
import p2 from "../assets/MawaMix.png";
import p3 from "../assets/Supremegold.png";
import p4 from "../assets/doodhmalai.png";
import bg3 from "../assets/bg3.mov";
import CattleFeedProduction from "./CattleFeedProduction";

export const products = [
  // ✅ Export products array also
  {
    id: 1,
    name: "Super Pellet",
    price: "₹850",
    image: p1,
    description:
      "उच्च प्रोटीन, वसा एवं खनिज तत्वों से भरपूर सुपाच्य टाइप-2 पशु आहार।",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%", // ✅ Add nutrients
    instructions: {
      usage: [
        "Soak it in water half to one hour before feeding. After that, mix it with dry fodder or straw before feeding. Dry cattle feed can also be given.",
        "Small animals should be given 0.5 kg to 2 kg of feed per day, depending on their age and weight."
      ],
      feedingSchedule: [
        {
          type: "For Animal Health",
          cow: "1.5 – 2 kg",
          buffalo: "2 – 2.5 kg",
        },
        {
          type: "For Milk Production",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "Pregnant Animal (Last 3 Months)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "Increases milk production.",
      "Improves animal health.",
      "Enhances the digestibility of feed.",
      "Improves reproductive capacity.",
      "Prevents deficiency of minerals and vitamins.",
      "Strengthens bones.",
      "Improves the body structure of animals."
    ],
    ingredients: [
      "Cottonseed cake",
      "Mustard cake",
      "Corn",
      "Wheat bran",
      "Minerals",
      "Salt",
      "Soybean meal",
      "Gram husk",
      "Calcium",
      "Vitamins",
      "Rice bran",
      "De-oiled rice bran",
    ],
    note: "Feed supplement only, not to be used as medicine. For best results, use regularly.",
  },
  {
    id: 2,
    name: "Mava Mix ",
    price: "₹950",
    image: p2,
    description:
      "A highly digestible feed rich in minerals and vitamins for your beloved animals.",
    nutrients: "Protein 16%, Fiber 12%, Fat 3%, Calcium 1.1%, Phosphorus 0.7%",
    instructions: {
      usage: [
        "Soak it in water half to one hour before feeding. After that, mix it with dry fodder or straw before feeding. Dry cattle feed can also be given.",
        "Small animals should be given 0.5 kg to 2 kg of feed per day, depending on their age and weight."
      ],
      feedingSchedule: [
        {
          type: "For Animal Health",
          cow: "1.5 – 2 kg",
          buffalo: "2 – 2.5 kg",
        },
        {
          type: "For Milk Production",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "Pregnant Animal (Last 3 Months)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "Increases milk production.",
      "Improves animal health.",
      "Enhances the digestibility of feed.",
      "Improves reproductive capacity.",
      "Prevents deficiency of minerals and vitamins.",
      "Strengthens bones.",
      "Improves the body structure of animals."
    ],
    ingredients: [
      "Cottonseed cake",
      "Mustard cake",
      "Corn",
      "Wheat bran",
      "Minerals",
      "Salt",
      "Soybean meal",
      "Gram husk",
      "Calcium",
      "Vitamins",
      "Rice bran",
      "De-oiled rice bran",
    ],
    note: "Feed supplement only, not to be used as medicine. For best results, use regularly.",
  },
  
  {
    id: 3,
    name: "Supreme Gold ",
    price: "₹1,200",
    image: p3,
    description:
      "उच्च प्रोटीन, वसा एवं खनिज तत्वों से भरपूर सुपाच्य टाइप-1 पशु आहार।",
    nutrients: "Protein 20%, Fiber 9%, Fat 5%, Calcium 1.3%, Phosphorus 0.9%",
    instructions: {
      usage: [
        "Soak it in water half to one hour before feeding. After that, mix it with dry fodder or straw before feeding. Dry cattle feed can also be given.",
        "Small animals should be given 0.5 kg to 2 kg of feed per day, depending on their age and weight."
      ],
      feedingSchedule: [
        {
          type: "For Animal Health",
          cow: "1.5 – 2 kg",
          buffalo: "2 – 2.5 kg",
        },
        {
          type: "For Milk Production",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "Pregnant Animal (Last 3 Months)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "Increases milk production.",
      "Improves animal health.",
      "Enhances the digestibility of feed.",
      "Improves reproductive capacity.",
      "Prevents deficiency of minerals and vitamins.",
      "Strengthens bones.",
      "Improves the body structure of animals."
    ],
    ingredients: [
      "Cottonseed cake",
      "Mustard cake",
      "Corn",
      "Wheat bran",
      "Minerals",
      "Salt",
      "Soybean meal",
      "Gram husk",
      "Calcium",
      "Vitamins",
      "Rice bran",
      "De-oiled rice bran",
    ],
    note: "Feed supplement only, not to be used as medicine. For best results, use regularly.",
  },
  {
    id: 4,
    name: "Dudh Malai",
    price: "₹1,300",
    image: p4,
    description:
      "Premium quality feed enriched with minerals for optimal cattle performance.",
    nutrients: "Protein 22%, Fiber 8%, Fat 5%, Calcium 1.5%, Phosphorus 1.0%",
    instructions: {
      usage: [
        "Soak it in water half to one hour before feeding. After that, mix it with dry fodder or straw before feeding. Dry cattle feed can also be given.",
        "Small animals should be given 0.5 kg to 2 kg of feed per day, depending on their age and weight."
      ],
      feedingSchedule: [
        {
          type: "For Animal Health",
          cow: "1.5 – 2 kg",
          buffalo: "2 – 2.5 kg",
        },
        {
          type: "For Milk Production",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "Pregnant Animal (Last 3 Months)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "Increases milk production.",
      "Improves animal health.",
      "Enhances the digestibility of feed.",
      "Improves reproductive capacity.",
      "Prevents deficiency of minerals and vitamins.",
      "Strengthens bones.",
      "Improves the body structure of animals."
    ],
    ingredients: [
      "Cottonseed cake",
      "Mustard cake",
      "Corn",
      "Wheat bran",
      "Minerals",
      "Salt",
      "Soybean meal",
      "Gram husk",
      "Calcium",
      "Vitamins",
      "Rice bran",
      "De-oiled rice bran",
    ],
    note: "Feed supplement only, not to be used as medicine. For best results, use regularly.",
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
          <h1 className="text-4xl lg:text-5xl font-bold">
            Premium Cattle Feed
          </h1>
          <p className="text-lg mt-2">
            High-quality feed for better nutrition & productivity
          </p>
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

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                {product.name}
              </h2>
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

export default Product;
