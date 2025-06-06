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
    name: "सुपर पैलेट",
    price: "₹850",
    image: p1,
    description:
      "उच्च प्रोटीन, वसा एवं खनिज तत्वों से भरपूर सुपाच्य टाइप-2 पशु आहार।",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%", // ✅ Add nutrients
    instructions: {
      usage: [
        " सुपर पैलेट को खिलाने से एक या आधा घंटा पहले पानी में भिगो दें।",
        "इसके बाद इसे सूखे चारे या भूसे में अच्छी तरह मिलाकर पशु को खिलाएं।",
        "सूखे पशु आहार के साथ भी इसका उपयोग किया जा सकता है।",
      ],

      feedingSchedule: [
        {
          type: "पशु स्वास्थ्य के लिए",
          cow: "1.5 - 2 किग्रा",
          buffalo: "2 - 2.5 किग्रा",
        },
        {
          type: "पशु दूध उत्पाद के लिए",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "गर्भावस्था के लिए (आख़िरी तीन महीनों में)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "दुग्ध उत्पादन, फैट और एस एन एफ बढ़ाता है। ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "खनिज लवणों की अधिक उपलब्धता के कारण दुग्ध में अचानक होने वाली गिरावट पर नियंत्रण।",
      "चोकर एवं खली की तुलना में अधिक लाभदायक।",
    ],
    ingredients: [
      "मक्का",
      "गेहूं",
      "सोयाबीन चुरा",
      "गुड़ का शीरा",
      "जौ",
      "सरसों खली",
      "सेंधा नमक",
      "मीठा सोडा",
      "मूंगफली खली",
      "चावल की छिलका",
      "कैल्शियम",
      " बिलौना खली",
      " खनिज मिश्रण ",
    ],
    composition: [
      { ingredient: "Crude Protein Min.", specification: "20.0 %" },
      { ingredient: "Crude Fibre Max.", specification: "7.0 %" },
      { ingredient: "Crude Fat Min.", specification: "4.0 %" },
      { ingredient: "Sand Silica Max.", specification: "3.0 %" },
      { ingredient: "Moisture Max.", specification: "11.0 %" },
      // { ingredient: "Acid Insoluble Ash Max.", specification: "4.0 %" },
      { ingredient: "Calcium", specification: "0.8%" },
      { ingredient: "Total Phosphorus", specification: "0.50%" },
      { ingredient: "Vitamin A", specification: "7,000 IU/kg" },
      { ingredient: "Vitamin D3", specification: "1,200 IU/kg" },
      { ingredient: "Vitamin E", specification: "30 IU/kg" },
      { ingredient: "Salt", specification: "1.0%" },
    ],
    note: [
      " ठंडी और सूखी जगह पर स्टोर करें",
      "बासी या फफूंद लगी सामग्री का उपयोग न करें",
    ],
  },
  {
    id: 2,
    name: "मावा मिक्स",
    price: "₹850",
    image: p2,
    description:
      "सुपर पैलेट के साथ — बिनौला खाली, सरसों खाली, छुरी, अन्य दानों से भरपूर सुपाच्य पशु आहार।",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%", // ✅ Add nutrients
    instructions: {
      usage: [
        " मावा मिक्स को खिलाने से एक या आधा घंटा पहले पानी में भिगो दें।",
        "इसके बाद इसे सूखे चारे या भूसे में अच्छी तरह मिलाकर पशु को खिलाएं।",
        "सूखे पशु आहार के साथ भी इसका उपयोग किया जा सकता है।",
      ],

      feedingSchedule: [
        {
          type: "पशु स्वास्थ्य के लिए",
          cow: "1.5 - 2 किग्रा",
          buffalo: "2 - 2.5 किग्रा",
        },
        {
          type: "पशु दूध उत्पाद के लिए",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "गर्भावस्था के लिए (आख़िरी तीन महीनों में)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "दुग्ध उत्पादन, फैट और एस एन एफ बढ़ाता है। ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "खनिज लवणों की अधिक उपलब्धता के कारण दुग्ध में अचानक होने वाली गिरावट पर नियंत्रण।",
      "चोकर एवं खली की तुलना में अधिक लाभदायक।",
    ],
    ingredients: [
      "मक्का",
      "गेहूं",
      "सोयाबीन चुरा",
      "गुड़ का शीरा",
      "जौ",
      "सरसों खली",
      "सेंधा नमक",
      "मीठा सोडा",
      "मूंगफली खली",
      "चावल की छिलका",
      "कैल्शियम",
      " बिलौना खली",
      " खनिज मिश्रण ",
    ],
    composition: [
      { ingredient: "Crude Protein" },
      { ingredient: "Crude Fibre" },
      { ingredient: "Crude Fat"},
      { ingredient: "Sand Silica" },
      { ingredient: "Moisture" },
      { ingredient: "Total Phosphorus"},
      // { ingredient: "Calcium Min.", specification: "1%" },
      // { ingredient: "Available Phosphorus Min.", specification: "0.50%" },
      { ingredient: "Vitamin A",  },
      { ingredient: "Vitamin D3",  },
      { ingredient: "Vitamin E", },
      // { ingredient: "PROBIOTICS", specification: "" },
      // { ingredient: "ENZYME COMPLEX", specification: "" },
      // { ingredient: "HERBS", specification: "" },
      // { ingredient: "Che. TRACE MINERALS", specification: "" },
      // { ingredient: "Manganese Min", specification: "0.10%" },
      // { ingredient: "Zinc Min", specification: "0.03%" },
      // { ingredient: "Salt", specification: "1%" },
    ],
    note: [
      " ठंडी और सूखी जगह पर स्टोर करें",
      "बासी या फफूंद लगी सामग्री का उपयोग न करें",
    ],
  },

  {
    id: 3,
    name: "सुप्रीम गोल्ड",
    price: "₹850",
    image: p3,
    description:
      "उच्च प्रोटीन, वसा एवं खनिज तत्वों से भरपूर सुपाच्य टाइप-1 पशु आहार।",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%", // ✅ Add nutrients
    instructions: {
      usage: [
        " सुप्रीम गोल्ड को खिलाने से एक या आधा घंटा पहले पानी में भिगो दें।",
        "इसके बाद इसे सूखे चारे या भूसे में अच्छी तरह मिलाकर पशु को खिलाएं।",
        "सूखे पशु आहार के साथ भी इसका उपयोग किया जा सकता है।",
      ],

      feedingSchedule: [
        {
          type: "पशु स्वास्थ्य के लिए",
          cow: "1.5 - 2 किग्रा",
          buffalo: "2 - 2.5 किग्रा",
        },
        {
          type: "पशु दूध उत्पाद के लिए",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "गर्भावस्था के लिए (आख़िरी तीन महीनों में)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "दुग्ध उत्पादन, फैट और एस एन एफ बढ़ाता है। ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "खनिज लवणों की अधिक उपलब्धता के कारण दुग्ध में अचानक होने वाली गिरावट पर नियंत्रण।",
      "चोकर एवं खली की तुलना में अधिक लाभदायक।",
    ],
    ingredients: [
      "मक्का",
      "गेहूं",
      "सोयाबीन चुरा",
      "गुड़ का शीरा",
      "जौ",
      "सरसों खली",
      "सेंधा नमक",
      "मीठा सोडा",
      "मूंगफली खली",
      "चावल की छिलका",
      "कैल्शियम",
      " बिलौना खली",
      " खनिज मिश्रण ",
    ],
    composition: [
      { ingredient: "Crude Protein Min.", specification: "26%" },
      { ingredient: "Fibre Max.", specification: "10%" },
      { ingredient: "Crude Fat Min.", specification: "6%" },
      { ingredient: "Sand Silica Max.", specification: "3.0 %" },
      { ingredient: "Moisture Max.", specification: "10%" },
      { ingredient: "Acid Insoluble Ash Max.", specification: "3%" },
      { ingredient: "Calcium Min.", specification: "1%" },
      { ingredient: "Available Phosphorus Min.", specification: "0.50%" },
      { ingredient: "Vitamin A", specification: "10,000 IU/kg" },
      { ingredient: "Vitamin D3", specification: "1,500 IU/kg" },
      { ingredient: "Vitamin E", specification: "30 IU/kg" },
      { ingredient: "Magnesium Min", specification: "5%" },
      { ingredient: "Iron Min", specification: "0.40%" },
      { ingredient: "Copper Min", specification: "0.06%" },
      { ingredient: "Cobalt Min", specification: "0.09%" },
      { ingredient: "Manganese Min", specification: "0.10%" },
      { ingredient: "Zinc Min", specification: "0.03%" },
      { ingredient: "Salt", specification: "1%" },
    ],
    note: [
      " ठंडी और सूखी जगह पर स्टोर करें",
      "बासी या फफूंद लगी सामग्री का उपयोग न करें",
    ],
  },
  {
    id:4,
    name: "दूध मलाई",
    price: "₹850",
    image: p4,
    description:
      "दूध-मलाई स्पेशल फॉर्मूला के साथ, उच्च पोषक तत्वों से भरपूर अन्न को पका कर उच्च तकनीक से तैयार किया गया सुपाच्य पशु आहार।",
    nutrients: "Protein 18%, Fiber 10%, Fat 4%, Calcium 1.2%, Phosphorus 0.8%", // ✅ Add nutrients
    instructions: {
      usage: [
        " दूध मलाई को खिलाने से एक या आधा घंटा पहले पानी में भिगो दें।",
        "इसके बाद इसे सूखे चारे या भूसे में अच्छी तरह मिलाकर पशु को खिलाएं।",
        "सूखे पशु आहार के साथ भी इसका उपयोग किया जा सकता है।",
      ],

      feedingSchedule: [
        {
          type: "पशु स्वास्थ्य के लिए",
          cow: "1.5 - 2 किग्रा",
          buffalo: "2 - 2.5 किग्रा",
        },
        {
          type: "पशु दूध उत्पाद के लिए",
          cow: "400 gm",
          buffalo: "500 gm",
        },
        {
          type: "गर्भावस्था के लिए (आख़िरी तीन महीनों में)",
          cow: "1.5 kg",
          buffalo: "1.5 kg",
        },
      ],
    },
    benefits: [
      "दुग्ध उत्पादन, फैट और एस एन एफ बढ़ाता है। ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "रोग प्रतिरोधक क्षमता में वृद्धि । ",
      "खनिज लवणों की अधिक उपलब्धता के कारण दुग्ध में अचानक होने वाली गिरावट पर नियंत्रण।",
      "चोकर एवं खली की तुलना में अधिक लाभदायक।",
    ],
    ingredients: [
      "मक्का",
      "गेहूं",
      "सोयाबीन चुरा",
      "गुड़ का शीरा",
      "जौ",
      "सरसों खली",
      "सेंधा नमक",
      "मीठा सोडा",
      "मूंगफली खली",
      "चावल की छिलका",
      "कैल्शियम",
      " बिलौना खली",
      " खनिज मिश्रण ",
    ],
    composition: [
      { ingredient: "Protein", specification: "28-30%" },
      { ingredient: "Fibre", specification: "8-10%" },
      { ingredient: "Fat / Oil", specification: "6%" },
      { ingredient: "Starch", specification: "15-18%" },
      { ingredient: "Moisture", specification: "8-10%" },
      { ingredient: "Extra Additional Vitamin", specification: "" },
      // { ingredient: "Calcium Min.", specification: "1%" },
      // { ingredient: "Available Phosphorus Min.", specification: "0.50%" },
      { ingredient: "Vitamin A", specification: "12,00000 IU/kg" },
      { ingredient: "Vitamin D3", specification: "25,0000 IU/kg" },
      { ingredient: "Vitamin E", specification: "2000 MG/kg" },
      { ingredient: "PROBIOTICS", specification: "" },
      { ingredient: "ENZYME COMPLEX", specification: "" },
      { ingredient: "HERBS", specification: "" },
      { ingredient: "Che. TRACE MINERALS", specification: "" },
      // { ingredient: "Manganese Min", specification: "0.10%" },
      // { ingredient: "Zinc Min", specification: "0.03%" },
      // { ingredient: "Salt", specification: "1%" },
    ],
    note: [
      " ठंडी और सूखी जगह पर स्टोर करें",
      "बासी या फफूंद लगी सामग्री का उपयोग न करें",
    ],
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
