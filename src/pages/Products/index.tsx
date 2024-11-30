import { Helmet } from "react-helmet";
import ProductsWithFilter from "../../components/products/ProductsWithFilter";
import { useEffect, useState } from "react";
import { Category, FilterState } from "../../types";
import Loader from "../../components/master/Loader";
import { APIBase } from "../../APIBase";

const Search = () => {
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const [filtersState, setFiltersState] = useState<FilterState>({});

  useEffect(() => {
    setCategoryData(null);
    (async () => {
      const res = await fetch(`${APIBase}/products`);
      const data = await res.json();
      if (res.ok)
        setCategoryData({
          products: data.data,
          description: "",
          id: "",
          image: "",
          name: "",
          slug: "",
        });
    })();
  }, []);

  return (
    <>
      <Loader open={!categoryData} />
      <Helmet>
        <title>Products - Stamina</title>
      </Helmet>
      <div className="mt-[200px]"></div>
      <ProductsWithFilter
        filtersState={filtersState}
        setFiltersState={setFiltersState}
        categoryData={categoryData}
        setCategoryData={setCategoryData}
      />
    </>
  );
};

export default Search;
