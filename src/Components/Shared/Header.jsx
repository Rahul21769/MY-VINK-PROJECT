import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";

function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontsize={20}
          className="text-black absolute top-1/2 -translate-y-1/2 left-7"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm  focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-lg px-4 pl-11"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <div className="h-15 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat">
        <img src="./images/Profile1.jpg" alt="" />
        </div>
        <div>
          <p className="text-sm color-#1D1934"> Adam Suley</p>
        </div>
        <div>
          <RxDotsVertical color={"#E84480"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
