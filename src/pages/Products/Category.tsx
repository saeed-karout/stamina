import Hero from "../../components/products/Hero";
import { Helmet } from "react-helmet";
import ProductsWithFilter from "../../components/products/ProductsWithFilter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIBase } from "../../APIBase";
import { Category as CategoryType, FilterState } from "../../types";
import Loader from "../../components/master/Loader";

const Category = () => {
  const { slug } = useParams();
  const [categoryData, setCategoryData] = useState<CategoryType | null>(null);
  const [filtersState, setFiltersState] = useState<FilterState>({});

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
        filtersState={filtersState}
        setFiltersState={setFiltersState}
        setCategoryData={setCategoryData}
      />
    </>
  );
};

export default Category;
