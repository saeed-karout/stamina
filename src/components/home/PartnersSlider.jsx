import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import partner1 from '../../assets/images/partners/partner1.svg';
import partner2 from '../../assets/images/partners/partner2.svg';
import partner3 from '../../assets/images/partners/partner3.svg';
import partner4 from '../../assets/images/partners/partner4.svg';

const PartnersSlider = () => {
  const sliderRef = useRef(null);

  const partners = [
    { id: 1, image: partner1, alt: 'Partner 1' },
    { id: 2, image: partner2, alt: 'Partner 2' },
    { id: 3, image: partner3, alt: 'Partner 3' },
    { id: 4, image: partner4, alt: 'Partner 4' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // تعطيل الأسهم الافتراضية
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto">
        {/* العنوان الرئيسي وأزرار التنقل */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 w-full text-center md:text-left relative">
          <div>
            <h4 className="flex items-center justify-center md:justify-start text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> Partners
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Success Partners</h2>
          </div>

          {/* أزرار التنقل الخاصة بالشريط */}
          <div className="flex items-center space-x-4 absolute right-0 top-0 md:static mt-4 md:mt-0">
            <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
            <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        {/* الشريط التمريري */}
        <Slider ref={sliderRef} {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="p-4">
              <div className="bg-gray-100 flex items-center justify-center h-40">
                <img src={partner.image} alt={partner.alt} className="w-auto max-h-full object-contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// مكون زر التنقل المخصص
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className="bg-orange-500 text-white p-2 cursor-pointer z-10 hover:bg-orange-600 transition duration-200"
      onClick={onClick}
    >
      {direction === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
    </div>
  );
};

export default PartnersSlider;
