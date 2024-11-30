// src/components/master/Footer.jsx

import { MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"; // Import React Router Link
import bg from "../../assets/bg/bg-footer.png";
const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-12 px-6"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="flex items-center mb-2">
            <MdPhone className="mr-2" />
            <span>+966 - 112 426 668</span>
          </div>
          <div className="flex items-center">
            <MdEmail className="mr-2" />
            <span>info@stamina.com.sa</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-400">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Products</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                to="/products/category/lima-mixers"
                className="hover:text-orange-400"
              >
                Lima Mixers
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/stamina-mixers"
                className="hover:text-orange-400"
              >
                Stamina Mixers
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/ceramics"
                className="hover:text-orange-400"
              >
                Ceramics
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/showers"
                className="hover:text-orange-400"
              >
                Showers
              </Link>
            </li>
            <li>
              <Link
                to="/products/category/accessories"
                className="hover:text-orange-400"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Keep In Touch */}
        <div>
          <h3 className="font-bold text-lg mb-4">Keep In Touch</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our website to get products that meet the needs of
            every home.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="py-2 px-4 w-[90%] mr-3 border text-black border-gray-300 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2  hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400">
        Copyright © 2022 Stamina. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
