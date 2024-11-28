import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center justify-center">
      <img src="/not-found.png" alt="" width={306} />
      <p className="text-[28px] mt-[28px] text-[#30373F] mb-[16px]">
        Page not found
      </p>
      <p className="text-sm text-[#6C6C6C] mb-[24px]">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        to="/"
        className="text-white bg-[#F79E10] px-[24px] py-[16px] flex gap-[12px] items-center mb-[62px]"
      >
        Back to Home
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default NotFound;
