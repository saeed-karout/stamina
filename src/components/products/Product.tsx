import { useState } from "react";
import { Link } from "react-router-dom";
import { Product as ProductType } from "../../types";

const Product = ({
  brand,
  colors,
  id,
  name,
  slug,
  noLink,
  onClick,
}: ProductType) => {
  const [colorIndex, setColorIndex] = useState(0);

  const LinkTag = noLink ? "div" : Link;

  return (
    <div
      style={{
        cursor: onClick ? "pointer" : "unset",
      }}
      onClick={() => {
        if (onClick) onClick(slug);
      }}
    >
      <LinkTag
        to={`/products/${slug}`}
        className="bg-[#F5F5F5] px-[32px] py-[36px] mb-3 block"
      >
        <img
          src={colors[colorIndex]?.product_image.medium_image_path}
          alt=""
          width={196}
          height={232}
          className="aspect-[196/232] w-full h-[unset]"
        />
      </LinkTag>
      <div className="flex justify-between px-4">
        <LinkTag to={`/products/${id}`} className="text-[#30373F]">
          {name}
        </LinkTag>
        <p className="text-sm border border-[#F79E10] bg-[#F79E1029] rounded-full px-3 py-1 text-[#F79E10]">
          {brand.name}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2 px-4">
        {colors.map(({ color_image }, i) => (
          <img
            onClick={() => setColorIndex(i)}
            src={color_image}
            key={i}
            alt=""
            className="cursor-pointer"
            width={12}
            height={12}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
