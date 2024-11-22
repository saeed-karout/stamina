// src/components/ProductsSection.jsx

import React from 'react';
import productImage1 from '../../assets/images/products/shawer.png';
import productImage2 from '../../assets/images/products/ceramic.jpg';
import productImage3 from '../../assets/images/products/mixer.png';
import productImage4 from '../../assets/images/products/floor-drain.png';
import productImage5 from '../../assets/images/products/accessory.png';
import productImage6 from '../../assets/images/products/mirror.png';

const ProductsSection = () => {
  const products = [
    {
      title: 'Showers',
      description: 'High quality showers by stainless steel with different sizes and shapes.',
      image: productImage1,
    },
    {
      title: 'Ceramic Pieces',
      description: 'Many pieces of high quality toilets and basins with different colors and configurations.',
      image: productImage2,
    },
    {
      title: 'Mixers',
      description: 'Many of mixers with different shapes and colors, and high quality conformity.',
      image: productImage3,
    },
    {
      title: 'Floor Drains',
      description: 'A lot of floor drains shapes by high quality of stainless steel that resists corrosion.',
      image: productImage4,
    },
    {
      title: 'Accessories',
      description: 'Many pieces of high quality toilets and basins with different colors and configurations.',
      image: productImage5,
    },
    {
      title: 'Mirrors',
      description: 'Many of mirrors with different shapes and colors, and high quality conformity.',
      image: productImage6,
    },
  ];

  return (
    <section className="p-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* العنوان الرئيسي والفرعي */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full text-center md:text-left">
          <div>
            <h4 className="flex items-center justify-center md:justify-start text-orange-500 font-bold text-sm uppercase tracking-wider">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> What We Offer
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Best Selling Products</h2>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600  transition duration-200">
            View More
          </button>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="mt-4">
                  <a href="/products" className="text-orange-500 font-semibold hover:text-orange-600 transition duration-200">
                    View Products &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
