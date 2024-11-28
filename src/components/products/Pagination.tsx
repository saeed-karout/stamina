import { Category, Link } from "../../types";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Dispatch, ReactNode, SetStateAction } from "react";

const Pagination = ({
  links,
  setCategoryData,
}: {
  links: Link[] | undefined;
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
}) => {
  return (
    <div className="flex items-center justify-center mt-20 mb-[48px]">
      {links?.map(({ label, active, url }) => {
        let tmpLabel: string | ReactNode = label;
        switch (label) {
          case "Previous":
            if (active) return;
            tmpLabel = <MdKeyboardArrowLeft />;
            break;
          case "Next":
            if (active) return;
            tmpLabel = <MdKeyboardArrowRight />;
            break;
          case "First":
          case "Last":
            return;
          default:
            break;
        }
        return (
          <button
            className="size-[32px] rounded grid place-items-center outline-none"
            disabled={active}
            key={label}
            style={{
              backgroundColor: active ? "#F79E10" : "",
              color: active ? "#fff" : "#6C6C6C",
            }}
            onClick={async () => {
              const res = await fetch(url);
              const data = await res.json();
              if (res.ok) setCategoryData(data.data);
            }}
          >
            {tmpLabel}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
