// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router Link
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdOutlineAccessTime, MdPhone, MdEmail, MdMenu, MdClose } from 'react-icons/md';
import Logo from '../../logo.png'; // Update path as per your project structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 ">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 px-4 flex justify-around items-center">
        <div className="flex items-center space-x-4">
          <MdOutlineAccessTime className="mr-2" />
          <span>Sun to Thu 9:00 am to 6:00 pm</span>
          <div className="flex gap-3 ml-4">
            <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-orange-500 transition" />
            <FaYoutube className="cursor-pointer hover:text-orange-500 transition" />
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <MdPhone className="mr-2" />
            <span>+966 - 112 429 048</span>
          </div>
          <div className="flex items-center">
            <MdEmail className="mr-2" />
            <span>info@stamina.com.sa</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-6 px-6 flex items-center justify-around relative">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Stamina Trading Logo"
            className="w-28"
          />
        </div>
        <div className="md:hidden z-30">
          <button onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 fixed md:static top-0 md:top-auto left-0 w-full md:w-auto h-full md:h-auto bg-white md:bg-transparent transition-transform transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:transform-none z-20`}
        >
          <li className="text-gray-800 font-semibold hover:text-orange-500 px-3 py-4 md:py-0">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="text-gray-800 font-semibold hover:text-orange-500 px-3 py-4 md:py-0">
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Our Products</Link>
          </li>
          <li className="text-gray-800 font-semibold hover:text-orange-500 px-3 py-4 md:py-0">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li className="text-gray-800 font-semibold hover:text-orange-500 px-3 py-4 md:py-0">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className="text-gray-800 font-semibold hover:text-orange-500 px-3 py-4 md:py-0">
            <Link to="/spaces" onClick={() => setIsMobileMenuOpen(false)}>Spaces</Link>
          </li>
        </ul>
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search here..."
            className="py-2 px-4 border rounded-md bg-[#f7f7f7] border-gray-300 focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
