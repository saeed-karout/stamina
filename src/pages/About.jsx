import React from 'react'
import backgroundImage from '../assets/bg/bg-about.jpg'; 
import visionImage from '../assets/images/about/vision-image.jpg'; 
import bgImage from '../assets/bg/bg-about2.jpg'; 
import { Helmet } from 'react-helmet';



function About() {
  return (
    <div>

    <Helmet>
      <title>About Us - Stamina</title>
      <meta name="description" content="Welcome to Stamina" />
      <link rel="icon" href="../logo.png" />
  
    </Helmet>


       <div
      className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative text-white text-4xl font-semibold">About Us</h2>
      </div>




      <section className="p-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto">
        {/* العنوان الفرعي والعنوان الرئيسي */}
        <div className="mb-6">
          <h4 className="flex items-center text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
            <hr className="w-4 border-1 mr-2 border-orange-400" /> About Us
          </h4>
          <h2 className="text-3xl font-bold text-gray-900">Stamina Trading Company</h2>
        </div>

        {/* النص التفصيلي */}
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            Stamina Trading Company was launched in Riyadh, Kingdom of Saudi Arabia in 2011.
          </p>
          <p className="mb-4">
            We specialize in the manufacture of sanitary ware and equipment, we make sure that our products as well as all of our services are of high quality, starting from the production stage to the stage of sales taking into account the finest details in quality and design.
          </p>
          <p className="mb-4">
            Our products successfully passed all the required tests according to the standards of the Saudi market. God blessed us for our success which born from our insistence to be among the distinguished in the list of sanitary ware manufacturers.
          </p>
          <p className="mb-4">
            We strive to provide everything that meets the expectations of our customers, so we have established a professional team that possesses competence and high professional and administrative experience to enable us to follow up with customers and pay attention to the smallest details that make us the best choice for customers.
          </p>
        </div>
      </div>
    </section>

    <section
      className="p-16 px-6 bg-white  "
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto">

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* النص الرئيسي */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Gaining the trust of our customers for everything related to the manufacture of sanitary products. Providing them with the result of our experience and knowledge at the highest level.
          </p>
        </div>

        {/* الصورة المائلة */}
        <div className="lg:w-1/2 flex  justify-center lg:justify-end relative">
          {/* الخلفية بدون دوران */}
          <div className="absolute w-[300px] h-[400px] bg-gray-200  shadow-lg"></div>
          {/* الصورة المائلة */}
          <div className="transform rotate-[8deg] shadow-lg relative">
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-[300px] h-[400px] object-cover rounded-md"
            />
          </div>
        </div>


      </div>
      </div>
    </section>




    <section className="p-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* الصورة المائلة */}
          <div className="lg:w-1/3 flex justify-center  relative mb-8 lg:mb-0">
            {/* الخلفية بدون دوران */}
            <div className="absolute w-[300px] h-[400px] bg-gray-200  shadow-lg"></div>
            {/* الصورة المائلة */}
            <div className="transform rotate-[-8deg] shadow-lg relative">
              <img
                src={visionImage}
                alt="Our Vision"
                className="w-[300px] h-[400px] object-cover "
              />
            </div>
          </div>

          {/* النص الرئيسي */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
            To be the most appropriate choice in the world of sanitary products and gadgets, to be a major reason for making your life easier.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About