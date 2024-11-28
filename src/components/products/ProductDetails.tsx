import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosGitCompare } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../types";

const ProductDetails = ({ product }: { product: Product }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [readmore, setReadmore] = useState(false);
  const { slug } = useParams();

  return (
    <div className="flex w-full gap-[56px] flex-col lg:flex-row">
      <div className="lg:max-w-[480px] w-full">
        {/* @ts-expect-error 123 */}
        <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
          {product.colors.map(({ product_image: { medium_image_path } }) => (
            <div
              className="bg-[#F5F5F5] px-[72px] py-[64px]"
              key={medium_image_path}
            >
              <img src={medium_image_path} alt="" />
            </div>
          ))}
        </Slider>
        <Slider
          // @ts-expect-error 123
          asNavFor={nav1}
          // @ts-expect-error 123
          ref={(slider) => setNav2(slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {product.colors.map(({ product_image: { medium_image_path } }) => (
            <div key={medium_image_path} className="px-[12px] pt-[12px]">
              <div className="bg-[#F5F5F5] px-[30px] py-[12px]">
                <img src={medium_image_path} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full">
        <p className="text-[28px] text-[#30373F] mb-[32px]">{product.name}</p>
        <p className="text-[#6C6C6C] text-sm mb-[24px]">
          {product.overview?.slice(0, readmore ? Infinity : 202)}
          {product.overview && product.overview.length > 202 && !readmore && (
            <>
              ...{" "}
              <button
                className="text-[#F79E10] text-sm"
                onClick={() => setReadmore((prev) => !prev)}
              >
                Read {readmore ? "less" : "more"}
              </button>
            </>
          )}
        </p>
        <div>
          <div
            className="flex min-h-[56px] items-center px-[20px] md:px-[44px] py-2"
            style={{
              backgroundColor: "#FAFAFA",
            }}
          >
            <div className="w-[120px] md:w-[184px] shrink-0 pr-2">Color</div>
            <div className="flex gap-[20px]">
              {product.colors.map(({ color_image }) => (
                <img src={color_image} width={20} height={20} />
              ))}
            </div>
          </div>
          {product.properties?.map(({ name, property_values, slug }, i) => (
            <div
              key={slug}
              className="flex min-h-[56px] items-center px-[20px] md:px-[44px] py-2"
              style={{
                backgroundColor: i % 2 == 0 ? "#F8F6F2" : "#FAFAFA",
              }}
            >
              <div className="w-[120px] md:w-[184px] shrink-0 pr-2">{name}</div>
              <div className="flex gap-[20px]">
                {property_values.map(({ value }) => value).join(", ")}
              </div>
            </div>
          ))}
        </div>
        <Link
          to={`/products/compare/${slug}`}
          className="flex px-[24px] py-[16px] text-xl text-white bg-[#F79E10] w-fit mt-[32px] items-center gap-3"
        >
          Add to compare <IoIosGitCompare />
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
