import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-50 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-sm font-bold">
            <img src={logo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24" />
          </Link>
          <span className="ml-2 font-bold text-primary text-3xl">NAVAAHAR</span>
        </div>

        {/* ✅ Desktop Nav Links (Hidden on Tablets & Mobile) */}
        <ul className="hidden lg:flex space-x-10 text-lg font-semibold uppercase tracking-wide">
          {['Home', 'About us', 'Products', 'Gallery', 'Sister Company'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="relative group"
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-green-600 transition duration-300"
              >
                {item}
              </Link>
              <motion.span
                className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"
                layoutId="underline"
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* ✅ Right Side: Contact Button (Hidden on Tablets & Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="hidden lg:block"
        >
          <Link
            to="/contact"
            className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-semibold uppercase tracking-wide shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact us
          </Link>
        </motion.div>

        {/* ✅ Mobile & Tablet Menu Button (Hamburger & Cross) */}
        <button
          className="text-green-600 lg:hidden text-3xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile & Tablet Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-screen w-3/4 md:w-2/4 lg:w-1/3 bg-green-700 shadow-lg flex flex-col items-center py-10 space-y-6 transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* ✅ Close Button Inside Menu */}
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {['Home', 'About us', 'Products', 'Gallery', 'Sister Company'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-300 relative group pb-1"
            onClick={() => setIsOpen(false)}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

        {/* ✅ Contact Button for Mobile & Tablet */}
        <Link
          to="/contact"
          className="px-6 py-2 bg-white text-green-700 rounded-full font-medium hover:bg-gray-100 transition shadow-md"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
