import ProductDetails from "../../components/products/ProductDetails";
import ProductItem from "../../components/products/Product";
import { useEffect, useState } from "react";
import { Category, Product as ProductType } from "../../types";
import { APIBase } from "../../APIBase";
import { useParams } from "react-router-dom";
import Loader from "../../components/master/Loader";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    setProduct(null);
    (async () => {
      const res = await fetch(`${APIBase}/products/${slug}`);
      const data = await res.json();
      if (res.ok) setProduct(data.data);
    })();
  }, [slug]);

  useEffect(() => {
    if (!product) return;
    (async () => {
      const res = await fetch(
        `${APIBase}/categories/${product.category}?perPage=4`
      );
      const data = await res.json();
      if (res.ok) setCategory(data.data);
    })();
  }, [product]);

  return (
    <>
      <Loader open={!product} />
      <div className="container mx-auto mt-[200px]">
        {product && <ProductDetails product={product} />}
        {category && (
          <>
            <p className="mt-[112px] text-[28px] mb-[32px] text-[#30373F]">
              You May Also Like
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px] mb-[112px]">
              {category?.products.data.map((product) => (
                <ProductItem {...product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
