import Hero from "../../components/products/Hero";
import { Helmet } from "react-helmet";
import ProductsWithFilter from "../../components/products/ProductsWithFilter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIBase } from "../../APIBase";
import { Category } from "../../types";
import Loader from "../../components/master/Loader";

const Products = () => {
  const { slug } = useParams();
  const [categoryData, setCategoryData] = useState<Category | null>(null);

  useEffect(() => {
    setCategoryData(null);
    (async () => {
      const res = await fetch(`${APIBase}/categories/${slug}`);
      const data = await res.json();
      if (res.ok) setCategoryData(data.data);
    })();
  }, [slug]);

  return (
    <>
      <Loader open={!categoryData} />
      <Helmet>
        <title>Products - Stamina</title>
      </Helmet>
      <Hero
        description={categoryData?.description}
        image={categoryData?.image}
        name={categoryData?.name}
      />
      <ProductsWithFilter
        categoryData={categoryData}
        setCategoryData={setCategoryData}
      />
    </>
  );
};

export default Products;
