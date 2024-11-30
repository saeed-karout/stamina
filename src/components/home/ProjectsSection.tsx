import images from "../../assets/images/projects/marble-flooring.png";
import icon from "../../assets/images/projects/arrow.png";

const LatestProjectsSection = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-8 ">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start  mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center text-orange-500 text-sm tracking-widest uppercase mb-4">
              <hr className="w-4 border-1 mr-2 border-orange-500" />
              What We Do
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Watch Our Latest Projects
            </h2>
          </div>
          {/* <button className="bg-orange-500 text-white font-normal px-6 py-3 shadow hover:bg-orange-600 transition duration-300">
            View More &rarr;
          </button> */}
        </div>

        <hr className="border-1 w-full border-[#e7e7e7] opacity-40 mb-10" />

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="bg-[#474c53]  transform   transition-transform duration-300  shadow-lg w-[80%] sm:w-[60%] lg:w-auto">
              <img
                src={images}
                alt="Marble Flooring"
                className="w-full transform rotate-6 h-96 object-cover "
              />
            </div>
          </div>

          {/* Project List */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              {[
                "Marble Flooring",
                "Exclusive Slabs Tiles",
                "Ceramic Tiles",
                "Industrial Flooring",
                "Laminate Flooring",
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex flex-row  items-center justify-between border-b border-gray-600 pb-4"
                >
                  <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                    <div className="text-orange-500 text-2xl font-semibold mr-4">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <div className="text-lg font-semibold">{project}</div>
                  </div>
                  <img src={icon} alt="Arrow Icon" className="w-12 " />
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
