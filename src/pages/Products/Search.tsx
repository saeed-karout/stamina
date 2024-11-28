import { Helmet } from "react-helmet";
import ProductsWithFilter from "../../components/products/ProductsWithFilter";

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Products - Stamina</title>
      </Helmet>
      <div className="mt-[200px]"></div>
      {true ? (
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
            (98) Search Results for “Mixers”
          </p>
          <ProductsWithFilter />
        </>
      )}
    </>
  );
};

export default Search;
