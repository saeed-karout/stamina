import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Category, FilterState, Filter as FilterTypes } from "../../types";
import { APIBase } from "../../APIBase";
import { useLocation, useParams } from "react-router-dom";

const Filters = ({
  filters,
  setCategoryData,
  setFiltersState,
  filtersState,
}: {
  filters: FilterTypes[] | undefined;
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
  filtersState: FilterState;
  setFiltersState: Dispatch<SetStateAction<FilterState>>;
}) => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  const fetchFilteredData = useCallback(
    async (filtersState: FilterState) => {
      setCategoryData(null);
      const res = await fetch(
        `${APIBase}/${
          pathname.includes("category") ? `categories/${slug}` : "products"
        }${
          Object.values(filtersState).length &&
          "?" +
            Object.entries(filtersState)
              .map(
                ([key, value]) =>
                  `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
              )
              .join("&")
        }`
      );
      const data = await res.json();
      if (res.ok) {
        if (!data.data.products)
          return setCategoryData({
            products: data.data,
            description: "",
            id: "",
            image: "",
            name: "",
            slug: "",
          });
        setCategoryData(data.data);
      }
    },
    [pathname, slug, setCategoryData]
  );

  return (
    <div className="flex-1 bg-[#F5F5F5] hidden md:block min-w-[300px] sticky top-[150px]">
      {filters?.map((filter, i) => (
        <Filter
          filter={filter}
          key={filter.name}
          isLastFilter={i === filters.length - 1}
          setFiltersState={setFiltersState}
          filtersState={filtersState}
          fetchFilteredData={fetchFilteredData}
        />
      ))}
    </div>
  );
};

const Filter = ({
  filter: { name, values, slug },
  isLastFilter,
  filtersState,
  setFiltersState,
  fetchFilteredData,
}: {
  filter: FilterTypes;
  isLastFilter: boolean;
  filtersState: FilterState;
  setFiltersState: Dispatch<SetStateAction<FilterState>>;
  fetchFilteredData: (v: FilterState) => void;
}) => {
  const [open, setOpen] = useState(
    filtersState &&
      !!Object.entries(filtersState).filter(
        ([key, value]) => slug == key && value
      ).length
  );

  let filters = <></>;

  const handleFilter = (slug1: string) => {
    setFiltersState((prev) => {
      let res = {};
      if (prev[slug] && prev[slug]?.includes(slug1)) {
        prev[slug] = prev[slug].replace(`,${slug1}`, "");
        prev[slug] = prev[slug].replace(`${slug1}`, "");
        res = { ...prev };
      } else {
        res = {
          ...prev,
          [slug]: prev[slug] ? `${prev[slug]},${slug1}` : slug1,
        };
      }
      fetchFilteredData(res);
      return res;
    });
  };

  switch (name) {
    case "Color":
      filters = (
        <div className="grid grid-cols-3 gap-y-4 mt-4">
          {values.map(({ name, slug: slug1 }) => (
            <label
              className="text-xs relative flex-col flex items-center gap-[8px] cursor-pointer select-none text-center"
              key={name}
            >
              <input
                className="appearance-none size-[34px] rounded-full cursor-pointer checked:outline outline-offset-2"
                type="checkbox"
                checked={filtersState[slug]?.includes(slug1)}
                style={{
                  backgroundColor: slug1,
                  outlineColor: slug1,
                }}
                onChange={() => {
                  handleFilter(slug1);
                }}
              />
              {name}
            </label>
          ))}
        </div>
      );
      break;
    default:
      filters = (
        <div className="flex flex-col gap-3 mt-4">
          {values.map(({ name, slug: slug1 }) => (
            <label
              className="text-sm relative flex items-center gap-[10px] cursor-pointer select-none"
              key={name}
            >
              <input
                className="appearance-none size-4 rounded border border-[#30373F] [&~svg]:checked:block checked:bg-[#30373F] outline-none"
                type="checkbox"
                checked={filtersState[slug]?.includes(slug1)}
                onChange={() => {
                  handleFilter(slug1);
                }}
              />
              <GiCheckMark
                className="hidden absolute left-[3px] text-white"
                fontSize={10}
              />
              {name}
            </label>
          ))}
        </div>
      );
      break;
  }

  return (
    <div
      className={`${
        isLastFilter || "border-b"
      } border-b-[#30373F29] py-[24px] px-[36px]`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between w-full items-center text-base text-left"
      >
        {name}
        <MdKeyboardArrowDown
          fontSize={20}
          className={`transition ${open && "-rotate-180"}`}
        />
      </button>
      {open && filters}
    </div>
  );
};

export default Filters;
