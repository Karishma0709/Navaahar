import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaQuoteLeft, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/testimonial.jpg";

const testimonials = [
  {
    id: 1,
    name: "राजेश कुमार",
    role: "डेयरी फार्म मालिक",
    image: img,
    feedback: "इस पशु चारे का उपयोग करने के बाद मेरे दूध उत्पादन में काफी वृद्धि हुई है!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "मीरा सिंह",
    role: "जैविक किसान",
    image: img,
    feedback: "उच्च गुणवत्ता वाला चारा जो प्राकृतिक तत्वों से बना है। मेरी गायें पहले से ज्यादा स्वस्थ हैं!",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    name: "अमित यादव",
    role: "पशु चिकित्सा विशेषज्ञ",
    image: img,
    feedback: "मैं इस चारे को सभी किसानों को सुझाता हूँ। इसमें बहुत ही अच्छा पोषण मूल्य है!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const TestimonialSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

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

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  return (
    <div className="py-16 bg-green-50 relative z-0">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-800 mb-8 relative inline-block"
        >
          हमारे किसानों के अनुभव
          <span className="block w-24 h-1 bg-gradient-to-r from-green-700 to-yellow-500 mx-auto mt-2"></span>
        </motion.h2>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 cursor-pointer"
                onClick={() => setSelectedVideo(testimonial.video)}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border border-green-300 flex flex-col items-center">
                  <FaQuoteLeft className="text-5xl text-green-600 mb-4" />
                  <p className="text-gray-700 text-lg italic leading-relaxed text-center">
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-green-600"
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg p-4 shadow-xl max-w-[700px] w-full">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-2xl z-50"
            >
              <FaTimes />
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-w-[640px] aspect-video rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialSection;
