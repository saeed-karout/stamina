import Filters from "./Filters";
import Product from "./Product";
import Pagination from "./Pagination";
import { Category, FilterState } from "../../types";
import { Dispatch, SetStateAction } from "react";

const ProductsWithFilter = ({
  categoryData,
  setCategoryData,
  filtersState,
  setFiltersState,
}: {
  categoryData: Category | null;
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
  filtersState: FilterState;
  setFiltersState: Dispatch<SetStateAction<FilterState>>;
}) => {
  return (
    categoryData && (
      <div className="container mx-auto">
        <div className="flex gap-[24px] items-start relative">
          <Filters
            filters={categoryData?.products.filters}
            setCategoryData={setCategoryData}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
          />
          <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoryData?.products.data.map((product) => (
              <Product {...product} key={product.id} />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={categoryData.products.meta.current_page}
          links={categoryData.products.links}
          setCategoryData={setCategoryData}
        />
      </div>
    )
  );
};

export default ProductsWithFilter;
