import React, { useState } from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    numberMobile: "",
    email: "",
    msg: "",
  });

  const [status, setStatus] = useState(""); // Success/Error Message

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setData({ name: "", numberMobile: "", email: "", msg: "" }); // Reset form
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Banner Section */}
      <div className="relative w-full h-72 mt-20 lg:h-96">
        <img
          src="https://via.placeholder.com/1500x500" // Replace with your banner image URL
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg mt-2">Reach out to us for any queries or assistance.</p>
        </div>
      </div>

      {/* ✅ Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:space-x-10 py-12 px-4 lg:px-16">
        {/* Contact Form */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-green-700 mb-3 relative text-center">
            Contact Us
          </h2>
          {/* ✅ Gradient Underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 mx-auto mb-6"></div>

          <form className={`${styles.form} bg-white p-6 rounded-lg shadow-lg`} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-green-800 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={data.name}
                onChange={handleOnChange}
                required
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 font-semibold mb-2">WhatsApp Number</label>
              <input
                type="tel"
                name="numberMobile"
                placeholder="Your Number"
                value={data.numberMobile}
                onChange={handleOnChange}
                required
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={data.email}
                onChange={handleOnChange}
                required
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-green-800 font-semibold mb-2">Message</label>
              <textarea
                name="msg"
                placeholder="Your Message"
                rows="5"
                value={data.msg}
                onChange={handleOnChange}
                required
                className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300">
              Send Message
            </button>
          </form>

          {/* ✅ Status Message */}
          {status && <p className="mt-4 text-center font-semibold text-green-700">{status}</p>}
        </div>

        {/* Contact Details & Google Map */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-green-700 mb-3 text-center">
            Our Location
          </h2>
          {/* ✅ Gradient Underline */}
         

          <p className="text-green-800 mb-4"><span className="font-bold">Timing:</span> 9:30 AM to 6:30 PM</p>
          <p className="text-green-800 mb-4">
            <span className="font-bold">Office:</span> Betul Biofuel Pvt. Ltd., 2nd Floor Old LIC Building, Gurudwaraganj, Betul (M.P.)
          </p>
          <p className="text-green-800 mb-4"><span className="font-bold">Pincode:</span> 462001</p>
          <p className="text-green-800 mb-4"><span className="font-bold">Phone:</span> +91 98765 43210</p>
          <p className="text-green-800 mb-4"><span className="font-bold">Email:</span> mahesh@bbpl.com</p>

          {/* Google Map */}
          <div className={`${styles.map} w-full h-64 bg-green-100 mt-6 rounded-lg overflow-hidden`}>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.181992927417!2d77.69354827403667!3d21.88906655767785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd611003183f7f9%3A0xf469f72ad451fd40!2sbetul%20biofuel%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1739259098394!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
