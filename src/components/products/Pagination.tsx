import { Category, Link } from "../../types";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Pagination = ({
  links: _links,
  setCategoryData,
  currentPage,
}: {
  links: Link[];
  setCategoryData: Dispatch<SetStateAction<Category | null>>;
  currentPage: number;
}) => {
  const [links, setLinks] = useState<(Link | null)[]>([]);

  useEffect(() => {
    setLinks(
      _links
        .map((link) => {
          switch (link.label) {
            case "Previous":
              if (link.active) return null;
              return { ...link, label: <MdKeyboardArrowLeft /> };
            case "Next":
              if (link.active) return null;
              return { ...link, label: <MdKeyboardArrowRight /> };
            case "First":
              if (link.active) return null;
              return { ...link, label: <MdKeyboardDoubleArrowLeft /> };
            case "Last":
              if (link.active) return null;
              return { ...link, label: <MdKeyboardDoubleArrowRight /> };
            default:
              if (
                currentPage - 1 != parseFloat(link.label as string) &&
                currentPage - 2 != parseFloat(link.label as string) &&
                currentPage != parseFloat(link.label as string) &&
                currentPage + 1 != parseFloat(link.label as string) &&
                currentPage + 2 != parseFloat(link.label as string)
              ) {
                if (currentPage == 1)
                  if (
                    currentPage + 3 == parseFloat(link.label as string) ||
                    currentPage + 4 == parseFloat(link.label as string)
                  )
                    return link;
                if (currentPage == 2)
                  if (currentPage + 3 == parseFloat(link.label as string))
                    return link;
                if (currentPage == _links.length - 5)
                  if (currentPage - 3 == parseFloat(link.label as string))
                    return link;
                if (currentPage == _links.length - 4)
                  if (
                    currentPage - 3 == parseFloat(link.label as string) ||
                    currentPage - 4 == parseFloat(link.label as string)
                  )
                    return link;
                return null;
              }
              return link;
          }
        })
        .filter((link) => link)
    );
  }, [currentPage, _links]);

  return (
    <div className="flex items-center justify-center mt-20 mb-[48px] flex-1">
      {(links as Link[])?.map(({ label, active, url }, i) => {
        return (
          <button
            className="size-[32px] rounded grid place-items-center outline-none"
            disabled={active}
            key={url + i}
            style={{
              backgroundColor: active ? "#F79E10" : "",
              color: active ? "#fff" : "#6C6C6C",
            }}
            onClick={async () => {
              setCategoryData(null);
              const res = await fetch(url);
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
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
