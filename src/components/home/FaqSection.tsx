// src/components/FaqSection.jsx

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // جعل السؤال الأول مفتوحًا بشكل افتراضي

  const faqs = [
    {
      question: 'What are the different types of marble?',
      answer:
        'There are many different types of marble, each with its own unique characteristics, color, and veining patterns. Some popular types of marble include Carrara, Calacatta, Crema Marfil, Emperador, and Nero Marquina.',
    },
    {
      question: 'Can marble be used in high-traffic areas?',
      answer:
        'Yes, marble can be used in high-traffic areas, but it requires regular maintenance and proper sealing to keep it looking its best.',
    },
    {
      question: 'What is the best way to clean marble?',
      answer:
        'The best way to clean marble is by using a soft cloth and a pH-neutral cleaner. Avoid acidic or abrasive cleaners as they can damage the surface.',
    },
    {
      question: 'How can I prevent stains on my marble surface?',
      answer:
        'To prevent stains on marble, always use coasters under glasses, clean up spills immediately, and use a sealer to protect the surface.',
    },
    {
      question: 'Can marble be repaired if it\'s damaged?',
      answer:
        'Yes, marble can be repaired by professionals. Minor scratches can be polished out, and cracks can be filled with special epoxy.',
    },
    {
      question: 'Is marble durable?',
      answer:
        'Marble is durable but requires care to avoid scratching and staining. With proper maintenance, it can last a lifetime.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col items-start justify-center">
        {/* العنوان الرئيسي والزر */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 w-full text-center md:text-left">
          <div>
            <h4 className="flex items-center justify-start md:justify-start text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> Frequently Asked Question
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Our Creation</h2>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 text-white font-medium  hover:bg-orange-600 transition duration-200">
            View More
          </button>
        </div>

        {/* الأسئلة المتكررة */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
