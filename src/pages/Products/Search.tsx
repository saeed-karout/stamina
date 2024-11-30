import { Helmet } from "react-helmet";
import ProductsWithFilter from "../../components/products/ProductsWithFilter";
import { useEffect, useState } from "react";
import { Category, FilterState } from "../../types";
import Loader from "../../components/master/Loader";
import { useParams } from "react-router-dom";
import { APIBase } from "../../APIBase";

const Search = () => {
  const [categoryData, setCategoryData] = useState<Category | null>(null);
  const { slug } = useParams();
  const [filtersState, setFiltersState] = useState<FilterState>({});

  useEffect(() => {
    setCategoryData(null);
    (async () => {
      const res = await fetch(`${APIBase}/products?keyword=${slug}`);
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
  }, [slug]);

  return (
    <>
      <Loader open={!categoryData} />
      <Helmet>
        <title>Products - Stamina</title>
      </Helmet>
      <div className="mt-[200px]"></div>
      {!categoryData?.products.meta.total ? (
        <div className="mt-[100px] mb-[212px] flex flex-col justify-center items-center">
          <img src="/search-not-found.png" width={144} height={144} />
          <p className="text-[#30373F] mt-[24px] mb-[16px] text-[28px]">
            Search not found
          </p>
          <p className="text-[#6C6C6C] text-sm">
            Sorry, We can't find the product you are looking for, Try using
            similar search terms.
          </p>
        </div>
      ) : (
        <>
          <p className="text-[28px] container mx-auto mb-[32px]">
            ({categoryData?.products.meta.total}) Search Results for "{slug}”
          </p>
          <ProductsWithFilter
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            categoryData={categoryData}
            setCategoryData={setCategoryData}
          />
        </>
      )}
    </>
  );
};

export default Search;
