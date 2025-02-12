import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src={logo} alt="Company Logo" className="w-28 h-28 rounded-full" />
          <h2 className="font-bold text-lg mb-3">About</h2>
          <p className="text-white w-1/2">
            Share store details, promotions, or brand content with your customers.
          </p>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Explore</h2>
          <ul className="text-white space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Product', path: '/products' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact Us', path: '/contact' },
            ].map((item, index) => (
              <li key={index} className="relative hover:text-white transition-all duration-300">
                <Link
                  to={item.path}
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h2 className="font-bold text-lg mb-3">Links</h2>
          <ul className="text-white space-y-2">
            {[
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms And Conditions', path: '/terms' },
              { name: 'Return And Refund', path: '/return-policy' },
              { name: 'betulbiofuel.com', path: 'https://betulbiofuel.com' },
              { name: 'ERP link', path: '/erp' },
            ].map((item, index) => (
              <li key={index} className="relative hover:text-white transition-all duration-300">
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg mb-3">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-xl" />
              <a
                href="https://maps.google.com/?q=Betul Biofuel Pvt. Ltd., 2nd Floor Old LIC Building, Gurudwaraganj, Betul (M.P.) - 462001"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Betul Biofuel Pvt. Ltd., 2nd Floor Old LIC Building, Gurudwaraganj, Betul (M.P.) - 462001
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <AiFillPhone className="text-xl" />
              <a
                href="tel:+919876543210"
                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <AiOutlineMail className="text-xl" />
              <a
                href="mailto:mahesh@bbpl.com"
                className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                mahesh@bbpl.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {[
              { icon: <TiSocialFacebook className="text-xl" />, link: '#' },
              { icon: <AiFillInstagram className="text-xl" />, link: '#' },
              { icon: <AiFillTwitterCircle className="text-xl" />, link: '#' },
              { icon: <AiFillLinkedin className="text-xl" />, link: '#' },
              { icon: <AiFillYoutube className="text-xl" />, link: '#' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent hover:border-white transition-all duration-300 bg-black"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white mt-5 pt-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">Navaahar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
