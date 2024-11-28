import Filters from "./Filters";
import Product from "./Product";
import Pagination from "./Pagination";
import { Category } from "../../types";
import { Dispatch, SetStateAction } from "react";

const ProductsWithFilter = ({
  categoryData,
  setCategoryData,
}: {
  categoryData: Category | null;
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
}) => {
  return (
    <div className="flex gap-[24px] container mx-auto items-start">
      <Filters filters={categoryData?.products.filters} setCategoryData={setCategoryData} />
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4">
          {categoryData?.products.data.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
        <Pagination
          links={categoryData?.products.links}
          setCategoryData={setCategoryData}
        />
      </div>
    </div>
  );
};

export default ProductsWithFilter;
