import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import v1 from "../assets/testimonials/v1.mp4";
import v2 from "../assets/testimonials/v2.mp4";
import v3 from "../assets/testimonials/v3.mp4";
import v4 from "../assets/testimonials/v4.mp4";
import v5 from "../assets/testimonials/v5.mp4";
import v6 from "../assets/testimonials/v6.mp4";

const testimonials = [v1, v2, v3, v4, v5, v6];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
  >
    <FaChevronLeft />
  </button>
);

const TestimonialSection = () => {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0; // reset
      }
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-16 bg-green-50 relative z-0">
      <div className="container mx-auto text-center px-6 relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-8 relative inline-block"
        >
          Our Farmers' Experiences
          <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
        </motion.h2>

        {/* Video Slider */}
        <div className="max-w-4xl mx-auto relative">
          <Slider {...settings}>
            {testimonials.map((videoSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="bg-white p-4 rounded-xl shadow-lg border border-green-300 flex justify-center">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={videoSrc}
                    controls
                    className="rounded-lg w-full max-h-[500px] object-contain"
                    onPlay={() => handlePlay(index)}
                  />
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
