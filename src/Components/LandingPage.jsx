import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProfileIcon from "./ProfileIcon";

function LandingPage() {
  return (
    <>
      <div className="w-[400px] relative mx-auto min-h-screen bg-[#1D1934] p-6 text-center shadow-md justify-between items-center">
        <div className="flex space-x-28 ">
          <div className="h-10 w-10 center rounded-full bg-gray-700 bg-no-repeat">
            <div className="mx-2 mt-2">
              <IoIosMenu fontSize={24} className="gray-300" color={"white"} />
            </div>
          </div>
          <p className="text-pink-500 text-2xl hover:text-gray-300">VINK</p>
          <div className="h-10 w-10 center rounded-full bg-gray-700 bg-no-repeat">
            <div className="mx-2 mt-2">
              <CgProfile fontSize={24} className="gray-300" color={"white"} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-pink-600 mr-10 text-sm float-left mt-5">
            My Profiles
          </p>
        </div>
        <div className="flex bg-[#1D1934] h-20 mt-20 w-[100%]">
          <div className="h-10 w-10 mx-5  rounded-full bg-gray-200 bg-no-repeat">
            <p className="font-bold text-center text-sm text-[#1D1934] pt-2">
              CN
            </p>
          </div>
          <div>
            <div className="flex">
              <p className="text-[#DEF2FF] text-1xl float-left">Company Name</p>
            </div>
            <div>
              <p className="text-xs text-[#9A9A9A]">
                +44 908 879 6789 | lormeipsum@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex bg-[#1D1934] h-20 mt-5 w-[100%]">
          <div className="h-10 w-10 mx-5  rounded-full bg-gray-200 bg-no-repeat">
            <p className="font-bold text-center text-sm text-[#1D1934] pt-2">
              JW
            </p>
          </div>
          <div>
            <div className="flex">
              <p className="text-[#DEF2FF] text-1xl float-left">John Willson</p>
              <button className="text-white text-xs ml-5 bg-[#5DAC20] rounded-full">
                Active
              </button>
            </div>
            <div>
              <p className="text-xs text-[#9A9A9A]">
                +44 908 879 6789 | johnwillson@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="my-40">
          <div className="">
            <button className=" h-15 w-50 py-4 px-14 text-sm bg-[#3F3A5C] outline outline-offset-2 outline-4 text-[#FF5B9F] rounded-">
              Add New Profile +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
