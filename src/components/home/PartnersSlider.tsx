import { MouseEvent, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { APIBase } from "../../APIBase";

// import partner1 from "../../assets/images/partners/partner1.svg";
// import partner2 from "../../assets/images/partners/partner2.svg";
// import partner3 from "../../assets/images/partners/partner3.svg";
// import partner4 from "../../assets/images/partners/partner4.svg";

interface Partner {
  id: string;
  name: string;
  description: string;
  image: string;
}

const PartnersSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(APIBase + "/partners");
      const data = await res.json();

      if (res.ok) setPartners(data.data);
    })();
  }, []);

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
        breakpoint: 768,
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
    <section className="p-8 sm:p-16 px-4 sm:px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto">
        {/* العنوان الرئيسي وأزرار التنقل */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 w-full text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h4 className="flex items-center justify-start md:justify-start text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> Partners
            </h4>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Success Partners
            </h2>
          </div>

          {/* أزرار التنقل الخاصة بالشريط */}
          <div className="flex  items-center space-x-4 mt-4 md:mt-0">
            <CustomArrow
              direction="prev"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <CustomArrow
              direction="next"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>

        {/* الشريط التمريري */}
        <Slider ref={sliderRef} {...settings}>
          {partners.map(({ id, name, image }) => (
            <div key={id} className="p-2 sm:p-4">
              <div className="bg-gray-100 flex items-center justify-center h-28 sm:h-40">
                <img
                  src={image}
                  alt={name}
                  className="w-auto max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: (e: MouseEvent) => void;
}) => {
  return (
    <button
      className="bg-orange-500 text-white p-2  cursor-pointer z-10 hover:bg-orange-600 transition duration-200 focus:outline-none"
      onClick={onClick}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    >
      {direction === "next" ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  );
};

export default PartnersSlider;
