// src/components/AboutSection.jsx

import React from 'react';
import image1 from '../../assets/images/1.png'; // مسار الصورة الأولى
import image2 from '../../assets/images/2.png'; // مسار الصورة الثانية

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-24 p-6 py-12 bg-white max-w-7xl mx-auto">
      {/* Left Side - Image Collage */}
      <div className="relative w-full max-w-xs sm:max-w-sm mx-auto   lg:overflow-visible flex-shrink-0 mb-8 lg:mb-0">
        {/* الصورة العلوية */}
        <img
          src={image1}
          alt="Marble Top"
          className="w-full object-cover shadow-md rounded-md"
        />

        {/* الصورة السفلية، وتوضع فوق قليلاً بفضل الـ absolute و transform */}
        <img
          src={image2}
          alt="Marble Bottom"
          className="absolute left-8 top-32 w-10/12 object-cover shadow-2xl transform rounded-md sm:left-16 sm:top-40 lg:left-36 lg:top-36"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full space-y-6 lg:w-1/2 text-gray-900 text-left">
        <div className="mb-4">
          <h4 className="flex items-center justify-start text-sm font-semibold text-orange-500 uppercase tracking-wider">
            <hr className='w-4 border-1 mr-2 border-orange-400' /> About Us
          </h4>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Let`s Make Your Vision A Reality With Stamina</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Stamina might be a business that specializes in creating or supplying high-quality marble products for home
          or commercial use, such as countertops, decorative pieces, and flooring or industries flooring.
        </p>
        <ul className="list-none space-y-4 sm:space-y-6 mb-6">
          <li className="flex items-center justify-start text-gray-700">
            <span className="mr-2 text-orange-500">➜</span> Come to Our Store for a Visit
          </li>
          <li className="flex items-center justify-start text-gray-700">
            <span className="mr-2 text-orange-500">➜</span> Let`s Find the Best Natural Stone
          </li>
          <li className="flex items-center justify-start text-gray-700">
            <span className="mr-2 text-orange-500">➜</span> Take Your Time to Choose Our Collection
          </li>
          <li className="flex items-center justify-start text-gray-700">
            <span className="mr-2 text-orange-500">➜</span> We Design Your Kitchen in 3D
          </li>
          <li className="flex items-center justify-start text-gray-700">
            <span className="mr-2 text-orange-500">➜</span> Delivery & Installation
          </li>
        </ul>
        <div className="flex justify-start">
          <button className="inline-block px-8 py-3 text-white bg-orange-500 hover:bg-orange-600 font-medium transition duration-200 ">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
