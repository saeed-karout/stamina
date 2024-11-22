import React from 'react'
import backgroundImage from '../assets/bg/bg-contact.jpg'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bgImage from '../assets/bg/bg-about2.jpg'; 
import { Helmet } from 'react-helmet';
import { CiHashtag ,CiPhone ,CiMail,CiMapPin} from "react-icons/ci";

function Contact() {
  return (

<div>
  
      <Helmet>
      <title>Contact Us - Stamina</title>
      <meta name="description" content="Welcome to Stamina" />
      <link rel="icon" href="../logo.png" />
  
    </Helmet>
  
      <div>
             <div
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h2 className="relative text-white text-4xl font-semibold">Contact Us</h2>
        </div>
  
  
  
  
  
        <section
        className="p-16 px-6 bg-white  "
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-16">
          {/* معلومات الاتصال */}
          <div className="lg:w-1/2">
            <h4 className="flex items-center text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> Contact Us
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Stay Connected</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              It's never been easier to get in touch with Stamina. Call us, use our live chat widget or email, and we'll get back to you as soon as possible!
            </p>
            {/* تفاصيل الاتصال */}
            <div className="grid grid-cols-2 gap-8">
              {/* البريد الإلكتروني */}
              <div className="flex flex-col items-start space-y-3 ">
                <div className="bg-orange-500 rounded-full w-20 h-20 flex justify-center items-center">

                  <CiMail className="text-white text-3xl " />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Email</h4>
                <p className="text-gray-600">info@stamina.com.sa</p>
              </div>
              {/* الهاتف */}
              <div className="flex flex-col items-start space-y-3">
              <div className="bg-orange-500 rounded-full w-20 h-20 flex justify-center items-center">
                <CiPhone className="text-white text-3xl " />
              </div>
                <h4 className="text-xl font-bold text-gray-900">Phone</h4>
                <p className="text-gray-600">+966 - 112 426 668</p>
              </div>
              {/* المكتب */}
              <div className="flex flex-col items-start space-y-3">
              <div className="bg-orange-500 rounded-full w-20 h-20 flex justify-center items-center">

                <CiMapPin className="text-white text-3xl ]" />
              </div>
                <h4 className="text-xl font-bold text-gray-900">Office</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, A maxime doloru ...</p>
              </div>
              {/* الشبكات الاجتماعية */}
              <div className="flex flex-col items-start space-y-3">
              <div className="bg-orange-500 rounded-full w-20 h-20 flex justify-center items-center">
                <CiHashtag className="text-white text-3xl " />
              </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Socials</h4>
                <div className="flex space-x-4 text-orange-500">
                  <FaFacebookF className="cursor-pointer" size={25} />
                  <FaTwitter className="cursor-pointer" size={25} />
                  <FaInstagram className="cursor-pointer"  size={25}/>
                  <FaLinkedin className="cursor-pointer" size={25} />
                </div>
              </div>
            </div>
          </div>
  
          {/* نموذج الاتصال */}
          <div className="lg:w-1/2 bg-white p-8 rounded-md shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="test@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  placeholder="Your phone number"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
                  rows="4"
                  placeholder="Your message ..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>
</div>
  )
}

export default Contact