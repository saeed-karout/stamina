import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { APIBase } from "../../APIBase";
import { Category } from "../../types";

const ComparePopup = ({
  open,
  setOpen,
  category,
  p1,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  category: string;
  p1: string;
}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Category | null>(null);
  const [fullProducts, setFullProducts] = useState<Category | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(null);
    (async () => {
      const res = await fetch(`${APIBase}/categories/${category}?perPage=1000`);
      const data = await res.json();
      if (res.ok) {
        setProducts(data.data);
        setFullProducts(data.data);
      }
    })();
  }, [category]);

  return (
    <div
      className="transition duration-300 fixed w-full h-full top-0 left-0 bg-[#30373F7A] flex items-center justify-center z-50"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
    >
      <div className="max-w-[800px] max-h-[600px] w-[90%] h-[90%] bg-white shadow-2xl px-[48px] py-[32px]">
        <div className="flex w-full justify-between border-b border-b-[#30373F29] pb-4">
          <p className="text-lg text-[#30373F]">Select a product to compare</p>
          <button onClick={() => setOpen(false)}>
            <CgClose />
          </button>
        </div>
        <form action="" className="relative w-full flex items-center my-6">
          <input
            type="text"
            className="w-full border border-[#6C6C6C29] pl-[48px] pr-4 py-4 text-sm outline-none"
            placeholder="Search here..."
            value={search}
            onChange={(e) => {
              if (!products || !fullProducts) return;
              const search = e.target.value;
              setProducts({
                ...fullProducts,
                products: {
                  ...fullProducts.products,
                  data: [
                    ...fullProducts.products.data.filter(
                      ({ name, overview, brand }) =>
                        name.toLowerCase().includes(search.toLowerCase()) ||
                        brand.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        `${overview}`
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    ),
                  ],
                },
              });
              setSearch(search);
            }}
          />
          <button className="absolute left-0 h-[54px] w-[45px] flex items-center justify-center">
            <BiSearch />
          </button>
        </form>
        <div className="overflow-y-scroll customScroll h-[calc(100%-150px)] px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
            {products?.products.data.map((product) =>
              product.slug == p1 ? (
                ""
              ) : (
                <Product
                  {...product}
                  key={product.id}
                  noLink
                  onClick={(slug) => {
                    setOpen(false);
                    navigate(`/products/compare/${p1}/vs/${slug}`);
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePopup;
