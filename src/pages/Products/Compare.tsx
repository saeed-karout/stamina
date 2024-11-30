import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/products/Product";
import ComparePopup from "../../components/products/ComparePopup";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Product as ProductType } from "../../types";
import { APIBase } from "../../APIBase";
import Loader from "../../components/master/Loader";

const Compare = () => {
  const { p1, p2 } = useParams();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [product1, setProduct1] = useState<ProductType | null>(null);
  const [product2, setProduct2] = useState<ProductType | null>(null);
  const [props, setProps] = useState<string[] | null>(null);

  useEffect(() => {
    if (!p1) return;
    setProduct1(null);
    (async () => {
      const res = await fetch(`${APIBase}/products/${p1}`);
      const data = await res.json();
      if (res.ok) setProduct1(data.data);
    })();
  }, [p1]);

  useEffect(() => {
    if (!p2) return;
    setProduct2(null);
    (async () => {
      const res = await fetch(`${APIBase}/products/${p2}`);
      const data = await res.json();
      if (res.ok) setProduct2(data.data);
    })();
  }, [p2]);

  useEffect(() => {
    const tmp = [
      ...(product1 ? (product1.properties as []) : []),
      ...(product2 ? (product2.properties as []) : []),
    ];
    setProps(Array.from(new Set(tmp.map(({ name }) => name))));
  }, [product1, product2]);

  return (
    <>
      <Loader open={(!product1 && !!p1) || (!product2 && !!p2)} />
      {product1 && (
        <ComparePopup
          p1={p1 as string}
          open={open}
          setOpen={setOpen}
          category={product1.category}
        />
      )}
      <div className="container mx-auto mt-[200px]">
        <div className="flex">
          <div className="w-full p-4 md:p-10 md:h-[500px] flex items-center justify-center">
            <div className="max-w-[260px] relative">
              {product1 && (
                <Product
                  noLink
                  brand={product1.brand}
                  name={product1.name}
                  colors={product1.colors}
                  category={product1.category}
                  id={product1.id}
                  slug={product1.slug}
                />
              )}
              {p2 && (
                <button
                  className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-white border border-red-700 text-red-700 size-[20px] rounded-full flex items-center justify-center"
                  onClick={() => {
                    setProduct1(product2);
                    setProduct2(null);
                    navigate(`/products/compare/${p2}`);
                  }}
                >
                  <CgClose fontSize={10} />
                </button>
              )}
            </div>
          </div>
          <div className="w-full p-4 md:p-10 md:h-[500px] flex items-center justify-center border-l border-l-[#30373F29]">
            {p2 && product2 ? (
              <div className="max-w-[260px] relative">
                <Product
                  noLink
                  brand={product2.brand}
                  name={product2.name}
                  colors={product2.colors}
                  category={product2.category}
                  id={product2.id}
                  slug={product2.slug}
                />
                <button
                  className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] bg-white border border-red-700 text-red-700 size-[20px] rounded-full flex items-center justify-center"
                  onClick={() => {
                    navigate(`/products/compare/${p1}`);
                    setProduct2(null);
                  }}
                >
                  <CgClose fontSize={10} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="bg-[#F79E10] px-6 py-4 text-xl text-white"
              >
                Add Product
              </button>
            )}
          </div>
        </div>
        <div className="mb-[128px]">
          {props?.map((name, i) => (
            <div
              key={name}
              className="min-h-[48px] py-2 px-[20px] md:items-center md:px-[44px] flex text-sm"
              style={{
                backgroundColor: i % 2 != 0 ? "#FAFAFA" : "#F8F6F2",
              }}
            >
              <div className="w-full flex flex-col md:flex-row md:items-center">
                <p className="md:w-[150px] shrink-0 font-semibold mb-2 pb-1 md:mb-0  border-b-[#5551] md:border-none w-full">
                  {name}
                </p>
                <p>
                  {product1?.properties
                    ?.find((prop) => prop.name == name)
                    ?.property_values.map(({ value }) => value)
                    .join(",") || "-"}
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row">
                <p className="shrink-0 text-transparent pointer-events-none md:hidden font-semibold mb-2 pb-1 md:mb-0  border-b-[#5551] w-full">
                  {name}
                </p>
                <p className="pl-[20px] md:pl-[44px]">
                  {product2?.properties
                    ?.find((prop) => prop.name == name)
                    ?.property_values.map(({ value }) => value)
                    .join(",") || "-"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Compare;
