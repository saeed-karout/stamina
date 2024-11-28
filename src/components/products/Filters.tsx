import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Category, Filter as FilterTypes } from "../../types";
import { APIBase } from "../../APIBase";
import { useParams } from "react-router-dom";

interface FilterState {
  [key: string]: string;
}

const Filters = ({
  filters,
  setCategoryData,
}: {
  filters: FilterTypes[] | undefined;
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
}) => {
  const [filtersState, setFiltersState] = useState<FilterState>({});
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${APIBase}/categories/${slug}${
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
      if (res.ok) setCategoryData(data.data);
    })();
  }, [filtersState, setCategoryData, slug]);

  return (
    <div className="max-w-[348px] bg-[#F5F5F5] w-full hidden md:block">
      {filters?.map((filter, i) => (
        <Filter
          filter={filter}
          key={filter.name}
          isLastFilter={i === filters.length - 1}
          setFiltersState={setFiltersState}
          filtersState={filtersState}
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
}: {
  filter: FilterTypes;
  isLastFilter: boolean;
  filtersState: FilterState;
  setFiltersState: Dispatch<SetStateAction<FilterState>>;
}) => {
  const [open, setOpen] = useState(false);

  let filters = <></>;

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
                  setFiltersState((prev) => {
                    if (prev[slug] && prev[slug]?.includes(slug1)) {
                      prev[slug] = prev[slug].replace(`,${slug1}`, "");
                      prev[slug] = prev[slug].replace(`${slug1}`, "");
                      return { ...prev };
                    }
                    return {
                      ...prev,
                      [slug]: prev[slug] ? `${prev[slug]},${slug1}` : slug1,
                    };
                  });
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
                  setFiltersState((prev) => {
                    if (prev[slug] && prev[slug]?.includes(slug1)) {
                      prev[slug] = prev[slug].replace(`,${slug1}`, "");
                      prev[slug] = prev[slug].replace(`${slug1}`, "");
                      return { ...prev };
                    }
                    return {
                      ...prev,
                      [slug]: prev[slug] ? `${prev[slug]},${slug1}` : slug1,
                    };
                  });
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
        className="flex justify-between w-full items-center text-base"
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
