import productImage1 from "../../assets/images/products/shawer.png";
import productImage2 from "../../assets/images/products/ceramic.jpg";
import productImage3 from "../../assets/images/products/mixer.png";
import productImage4 from "../../assets/images/products/floor-drain.png";
import productImage5 from "../../assets/images/products/accessory.png";
import productImage6 from "../../assets/images/products/mirror.png";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      title: "Showers",
      description:
        "High quality showers by stainless steel with different sizes and shapes.",
      image: productImage1,
      href: "/products/category/showers",
    },
    {
      title: "Ceramic Pieces",
      description:
        "Many pieces of high quality toilets and basins with different colors and configurations.",
      image: productImage2,
      href: "/products/category/ceramic",
    },
    {
      title: "Mixers",
      description:
        "Many of mixers with different shapes and colors, and high quality conformity.",
      image: productImage3,
      href: "/products/category/lima-mixers",
    },
    {
      title: "Floor Drains",
      description:
        "A lot of floor drains shapes by high quality of stainless steel that resists corrosion.",
      image: productImage4,
      href: "/products/category/floor-drains",
    },
    {
      title: "Accessories",
      description:
        "Many pieces of high quality toilets and basins with different colors and configurations.",
      image: productImage5,
      href: "/products/category/accessories",
    },
    {
      title: "Mirrors",
      description:
        "Many of mirrors with different shapes and colors, and high quality conformity.",
      image: productImage6,
      href: "/products/category/mirrors",
    },
  ];

  return (
    <section className="p-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 w-full text-start ">
          <div>
            <h4 className="flex items-center justify-start text-orange-500 font-bold text-sm uppercase tracking-wider">
              <hr className="w-4 border-1 mr-2 border-orange-400" /> What We
              Offer
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Our Best Selling Products
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ image, title, description, href }, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
                <div className="mt-4">
                  <Link
                    to={href}
                    className="text-orange-500 font-semibold hover:text-orange-600 transition duration-200"
                  >
                    View Products &rarr;
                  </Link>
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
