import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

function LandingPage1() {
  return (
    <>
      <div>
        <div className="w-[400px] relative mx-auto min-h-screen bg-[#1D1934] p-1 text-center shadow-md justify-between items-center">
          <div className="relative w-[400px] h-[665px] bg-[#000000] ">
            <img src="./images/Banner2.png" alt="" />
            <div className="absolute top-0 flex mt-3 mx-5 space-x-20 ">
              <div className="h-10 w-10 center rounded-full bg-slate-400 bg-no-repeat ">
                <div className="mx-3 mt-3">
                  <FaLongArrowAltLeft color={"white"} />
                </div>
              </div>
              <div className="h-10 w-10 center rounded-full bg-slate-400 bg-no-repeat">
                <div className="mx-3 mt-3">
                  <CiShare2 color={"white"} />
                </div>
              </div>
              <div className="">
                <div className="mx-2 mt-2">
                  <p className="text-[#DEF2FF]  float-right">Edit Profile</p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="border-t-8 boder-full border-[#3F3673] ...">
            <div className="mt-2">
              <img src="./images/Deliver.png" alt="" />
            </div>
            <div className="h-35 w-60">
              <div>
                <p className="text-white text-4xl mr-10 text-sm float-left mt-5">
                  JohnWillson
                </p>
              </div>
              <div>
                <p className="text-white text-sm mr-10 text-sm float-left mt-1">
                  Senior Manager
                </p>
              </div>
            </div>
            <div className="flex bg-[#1D1934] h-20 mt-1 w-[100%] space-x-4">
              <div className="h-10 w-10 mt-5 center rounded-full bg-white bg-no-repeat ">
                <div className="mx-3 mt-3">
                  <FaPhoneAlt />
                </div>
              </div>
              <div className="h-10 w-10 mt-5 center rounded-full bg-white bg-no-repeat ">
                <div className="mx-3 mt-3">
                  <MdEmail />
                </div>
              </div>
              <div className="h-10 w-10 mt-5 center rounded-full bg-white bg-no-repeat ">
                <div className="mx-3 mt-3">
                  <RiMessage2Fill />
                </div>
              </div>
              <div className="h-10 w-10 mt-5 center rounded-full bg-white bg-no-repeat ">
                <div className="mx-3 mt-3">
                  <FaWhatsapp />
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-[#4E4777]"></hr>
            <br></br>
            <div className="flex bg-[#1D1934] h-20 mt-2 w-[100%]">
              <div className="h-10 w-10 mx-2 rounded-full bg-[#1e3a8a] bg-no-repeat">
                <p className="font-bold px-3 py-4 text-center text-sm text-[#1D1934] pt-2">
                  <FaFacebookF color={"white"} />
                </p>
              </div>
              <div className="">
                <div className="">
                  <p className="text-[#DEF2FF] text-1xl float-left">Facebook</p>
                </div>
                <div>
                  <p className="text-xs text-[#9A9A9A] ">LikeusonFacebook</p>
                </div>
              </div>
              <div className="px-40 my-3">
                <FaGreaterThan color={"white"} />
              </div>
            </div>
            <hr className="border-t-2 border-[#4E4777]"></hr>
            <br></br>
            <div className="flex bg-[#1D1934] h-20  w-[100%]">
              <div className="h-10 w-10 mx-2 rounded-full bg-pink-600 bg-no-repeat">
                <p className="font-bold px-3 text-center text-sm text-[#1D1934] pt-2">
                  <FaInstagram color={"white"} />
                </p>
              </div>
              <div className="">
                <div className="">
                  <p className="text-[#DEF2FF] text-1xl float-left">
                    Instagram
                  </p>
                </div>
                <div className="">
                  <p className="text-xs text-[#9A9A9A]">FollowusonInstagram</p>
                </div>
              </div>
              <div className="px-40 my-3">
                <FaGreaterThan color={"white"} />
              </div>
            </div>
            <hr className="border-t-2 border-[#4E4777]"></hr>
            <div className="bg-[#363057] h-70 width-40 mt-5 rounded	">
              <div className="">
                <p className="text-pink-600 text-2xl mx-12">About Me</p>
              </div>
              <br></br>
              <div className="">
                <p className="text-sm mx-12 text-violet-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu nulla at mi laoreet fermentum. Maecenas congue varius
                  mauris, sed aliquam ipsum ultrices id.
                </p>
              </div>
            </div>
            <br></br>
            <div className="bg-[#363057] h-75 width-40 mt-5 rounded ">
              <div className="mt-5">
                <p className="text-pink-600 ml-3 text-2xl ">Achievement</p>
              </div>
              <br></br>
              <div>
                <p className="text-sm text-violet-200	mr-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eu nulla at mi laoreet fermentum.
                </p>
                <p className="text-sm text-violet-200	mr-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="">
              <button className=" h-15 w-50 py-4 px-14 text-sm bg-[#3F3A5C] outline outline-offset-2 outline-4 text-[#FF5B9F] rounded-">
                Change Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage1;
