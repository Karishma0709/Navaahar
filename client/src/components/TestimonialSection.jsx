import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/testimonial.jpg"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Dairy Farm Owner",
    image: img,
    feedback: "Since using this cattle feed, my milk production has increased significantly!",
  },
  {
    id: 2,
    name: "Meera Singh",
    role: "Organic Farmer",
    image: img,
    feedback: "High-quality feed with natural ingredients. My cattle are healthier than ever!",
  },
  {
    id: 3,
    name: "Amit Yadav",
    role: "Veterinary Specialist",
    image: img,
    feedback: "I recommend this feed to all farmers. It has excellent nutritional value!",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto text-center px-6">
        
        {/* ✅ Heading with Gradient Underline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-8 relative inline-block"
        >
          What Our Farmers Say
          <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
        </motion.h2>

        {/* ✅ Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-green-300 flex flex-col items-center">
                  
                  {/* ✅ Quote Icon */}
                  <FaQuoteLeft className="text-5xl text-primary mb-4" />
                  
                  {/* ✅ Testimonial Text */}
                  <p className="text-gray-700 text-lg italic leading-relaxed text-center">
                    "{testimonial.feedback}"
                  </p>

                  {/* ✅ User Info */}
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-primary"
                    />
                    <h3 className="text-2xl font-semibold text-green-900 mt-3">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
