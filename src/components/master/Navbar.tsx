import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  MdOutlineAccessTime,
  MdPhone,
  MdEmail,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { APIBase } from "../../APIBase";
import { BiSearch } from "react-icons/bi";
import { useTailwindBreakpoint } from "../../hooks/useTailwindBreakpoint";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  subcategories?: Category[];
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      const res = await fetch(APIBase + "/categories");
      const data = await res.json();

      if (!res.ok) return;

      setCategories(data.data);
    })();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto flex justify-between py-2 items-center">
          <div className="flex items-center space-x-4">
            <MdOutlineAccessTime className="mr-2" />
            <span>Sun to Thu 9:00 am to 6:00 pm</span>
            <div className="flex gap-3 ml-4">
              <FaFacebookF className="cursor-pointer hover:text-orange-500 transition" />
              <FaInstagram className="cursor-pointer hover:text-orange-500 transition" />
              <FaTwitter className="cursor-pointer hover:text-orange-500 transition" />
              <FaYoutube className="cursor-pointer hover:text-orange-500 transition" />
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
              <MdPhone className="mr-2" />
              <span>+966 - 112 429 048</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-2" />
              <span>info@stamina.com.sa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between relative py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Stamina Trading Logo" className="w-28" />
          </Link>

          {/* Burger Menu Button for Mobile */}
          <div className="lg:hidden z-30">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <div className=""></div>
              ) : (
                <MdMenu size={30} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`flex-col lg:flex lg:flex-row lg:space-x-6 fixed lg:static top-0 lg:top-auto left-0 w-full
            lg:w-auto h-full lg:h-auto bg-white lg:bg-transparent transition-transform transform ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:transform-none z-20 shadow-lg lg:shadow-none lg:overflow-y-visible overflow-y-scroll customScroll`}
          >
            {/* زر الإغلاق في وضع الجوال */}
            <div className="flex lg:hidden justify-end p-6">
              <button onClick={toggleMobileMenu}>
                <MdClose
                  size={30}
                  className="text-gray-800 hover:text-orange-500 transition"
                />
              </button>
            </div>

            {/* روابط القائمة */}
            <li className="w-fit text-gray-800 font-semibold hover:text-orange-500 px-6 py-4 lg:py-0 transition duration-300">
              <Link
                to="/"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setCategoryOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li
              className="w-fit text-gray-800 font-semibold px-6 py-4 lg:py-0 relative"
              onMouseEnter={() => {
                setCategoryOpen(true);
              }}
              onMouseLeave={() => {
                setCategoryOpen(false);
              }}
            >
              <Link
                to="/products"
                onClick={() => {
                  setCategoryOpen((prev) => !prev);
                }}
                className="flex items-center hover:text-orange-500 transition duration-300"
                style={{
                  color: pathname.includes("/products/category/")
                    ? "#f97316"
                    : "",
                }}
              >
                Our Products
                <MdKeyboardArrowDown
                  fontSize={20}
                  className={`transition duration-300 ${
                    categoryOpen && "-rotate-180"
                  }`}
                />
              </Link>
              <CategoriesMenu
                root
                categories={categories}
                open={categoryOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setRootCategoryOpen={setCategoryOpen}
                rootCategoryOpen={categoryOpen}
              />
            </li>
            <li className="w-fit text-gray-800 font-semibold hover:text-orange-500 px-6 py-4 lg:py-0 transition duration-300">
              <Link
                to="/about"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setCategoryOpen(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li className="w-fit text-gray-800 font-semibold hover:text-orange-500 px-6 py-4 lg:py-0 transition duration-300">
              <Link
                to="/contact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setCategoryOpen(false);
                }}
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="text-gray-800 font-semibold hover:text-orange-500 px-6 py-4 lg:py-0 transition duration-300">
              <Link
                to="/spaces"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setCategoryOpen(false);
                }}
              >
                Spaces
              </Link>
            </li> */}

            {/* حقل البحث وزر البحث */}
            <SearchSmall />
          </ul>

          {/* Search Input */}
          <Search />
        </div>
      </nav>

      {/* Background Overlay when Mobile Menu is Open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 rounded-md transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

const SearchSmall = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/products/search/${search}`);
        setSearch("");
      }}
      className="w-full lg:hidden px-6 py-4 flex items-center"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here..."
        className="py-2 px-4 border mr-2 bg-[#f7f7f7] border-gray-300 focus:outline-none focus:ring focus:ring-orange-300 w-full"
      />
      <button className="bg-orange-500 text-white px-4 py-2  hover:bg-orange-600 transition duration-200">
        Search
      </button>
    </form>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/products/search/${search}`);
        setSearch("");
      }}
      className="hidden lg:flex relative"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here..."
        className="py-2 px-4 border  bg-[#f7f7f7] border-gray-300 focus:outline-none focus:ring focus:ring-orange-300"
      />
      <button className="bg-[#F79E10] p-3">
        <BiSearch fontSize={20} color="white" />
      </button>
    </form>
  );
};

const CategoriesMenu = ({
  categories,
  open,
  setIsMobileMenuOpen,
  setRootCategoryOpen,
  rootCategoryOpen,
  root,
}: {
  categories: Category[];
  open?: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setRootCategoryOpen: Dispatch<SetStateAction<boolean>>;
  rootCategoryOpen: boolean;
  root?: boolean;
}) => {
  return (
    <div
      className="md:absolute bg-white flex-col py-2 md:shadow-lg w-60 z-50 transition"
      style={{
        display: open ? "flex" : "none",
        left: root ? 0 : "100%",
        top: root ? "100%" : 0,
      }}
    >
      {categories.map((category) => (
        <CategoryItem
          rootCategoryOpen={rootCategoryOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          key={category.id}
          category={category}
          setRootCategoryOpen={setRootCategoryOpen}
        />
      ))}
    </div>
  );
};

const CategoryItem = ({
  category: { id, name, subcategories, slug },
  setIsMobileMenuOpen,
  setRootCategoryOpen,
  rootCategoryOpen,
}: {
  category: Category;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setRootCategoryOpen: Dispatch<SetStateAction<boolean>>;
  rootCategoryOpen: boolean;
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const breakpoint = useTailwindBreakpoint();

  useEffect(() => {
    if (!rootCategoryOpen) setCategoryOpen(false);
  }, [rootCategoryOpen]);

  return (
    <div
      className="relative px-5"
      key={id}
      onMouseEnter={() => {
        if (breakpoint == "lg" || breakpoint == "xl") setCategoryOpen(true);
      }}
      onMouseLeave={() => {
        if (breakpoint == "lg" || breakpoint == "xl") setCategoryOpen(false);
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          to={`/products/category/${slug}`}
          className="w-full py-1 hover:text-orange-500 transition duration-300"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setRootCategoryOpen(false);
          }}
        >
          {name}
        </Link>
        {subcategories && (
          <button
            className="cursor-pointer"
            onClick={() => setCategoryOpen((prev) => !prev)}
          >
            <MdKeyboardArrowDown
              fontSize={20}
              className={`transition ${categoryOpen && "-rotate-180"}`}
            />
          </button>
        )}
      </div>
      {subcategories && (
        <CategoriesMenu
          rootCategoryOpen={rootCategoryOpen}
          setRootCategoryOpen={setRootCategoryOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          categories={subcategories}
          open={categoryOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
