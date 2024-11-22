// src/components/home/ServicesSection.jsx

import React from 'react';
import bgCardService from '../../assets/bg/bg-card-service.jpg'; // استيراد الصورة
import icon1 from '../../assets/images/home-service/1.png'
import icon2 from '../../assets/images/home-service/2.png'
import icon3 from '../../assets/images/home-service/3.png'
import icon4 from '../../assets/images/home-service/4.svg'
import icon5 from '../../assets/images/home-service/5.svg'

const ServicesSection = () => {
  const services = [
    {
      title: 'Laminate Flooring',
      description: 'Laminate flooring is a type of synthetic flooring that is designed like hard wood, tile, or other natural materials.',
      icon: <img src={icon1} alt="" />,
    },
    {
      title: 'Carpets & Rugs',
      description: 'Carpets & rugs are textile floor coverings that are used to add warmth, comfort, and style to a room.',
     icon: <img src={icon2} alt="" />,
      
    },
    {
      title: 'Marble Flooring',
      description: 'Marble flooring is a beautiful and durable choice for any space, it requires careful consideration & maintenance.',
      icon: <img src={icon3} alt="" />,

    },
    {
      title: 'Industrial Flooring',
      description: 'Vinyl flooring is a popular choice for industrial and commercial settings because it is affordable.',
      icon: <img src={icon4} alt="" />,

    },
    {
      title: 'Vinyl Flooring',
      description: 'It is a popular choice for residential and commercial spaces due to its durability, affordability, and versatility.',
      icon: <img src={icon5} alt="" />,

    },
    {
      title: 'Oak Flooring',
      description: 'It is a popular choice for residential and commercial spaces due to its durability, natural beauty, and versatility.',
      icon: <img src={icon5} alt="" />,

    },
  ];

  return (
    <section className="flex justify-center p-16">
      <div className=" max-w-7xl">
        {/* العنوان الرئيسي والفرعي */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h4 className="flex items-center text-orange-500 font-bold text-sm uppercase tracking-wider">
            <hr className='w-4 border-1 mr-2 border-orange-400' /> Our Services
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Provides Best Services</h2>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600 transition duration-200">
            View More
          </button>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} 
                 className="shadow-lg  p-16 flex justify-between items-start"
                 style={{
                   backgroundImage: `url(${bgCardService})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}
            >
              <div className="flex-1">
                <h3 className="font-normal text-2xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="ml-4 self-center">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
