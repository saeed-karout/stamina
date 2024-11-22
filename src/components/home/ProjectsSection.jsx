import React from "react";
import images from '../../assets/images/projects/marble-flooring.png';
import icon from '../../assets/images/projects/arrow.png';

const LatestProjectsSection = () => {
  console.log(icon); // Debugging: Check if the icon path is correct

  return (
    <div className="bg-gray-800 text-white py-16 px-8">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div>
            <div className="text-yellow-600 text-sm tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="text-3xl font-bold mb-12">Watch Our Latest Projects</h2>
          </div>
          <div className="mt-8">
            <button className="bg-orange-500 text-white font-normal px-6 py-3 shadow hover:bg-orange-600 transition duration-300">
              View More &rarr;
            </button>
          </div>
        </div>

        <hr className="border-1 w-full border-[#e7e7e7] opacity-40 mb-10" />

        <div className="flex justify-between gap-12">
          {/* Image Section */}
          <div className=" relative">
            <div className="bg-[#474c53]    transform  transition-transform duration-300">
              <img src={images} alt="Marble Flooring" className="w-full h-auto rotate-[8deg] object-cover" />
            </div>
          </div>

          {/* Project List */}
          <div className="w-[50vw]">
            <div className="space-y-8 w-full">
              {[
                "Marble Flooring",
                "Exclusive Slabs Tiles",
                "Ceramic Tiles",
                "Industrial Flooring",
                "Laminate Flooring",
              ].map((project, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                 <div className="flex items-center w-full justify-between  space-y-4">
                   
                 <div className="flex items-center ">
                    <div className="text-orange-500 text-2xl font-semibold mr-4 ">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <div className="flex-1 text-lg font-semibold">{project}</div>
                 </div>

                   <div className="z-10 ml-auto">
                     <img
                       src={icon}
                       alt="Arrow Icon"
                                           />
                   </div>

                 </div> 

                  <hr className="border-1 w-full opacity-25 border-gray-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectsSection;
