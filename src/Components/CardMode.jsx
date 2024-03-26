import React from "react";

function CardMode() {
  return (
    <>
      <div className="flex gap-5">
        <div className=" bg-white h-60 mt-5 w-[30%]">
          <div className="flex">
            <h1 className="font-bold pt-5 pl-5">Card Mode Usage </h1>
            <p className="text-sm pl-60 pt-5 pr-2"> This Weeks</p>
          </div>
          <div className="flex bg-white px-2 pt-5 ">
            <div>
              <img src="./images/Total Taps.png" alt="" />
            </div>
            <div>
              <p className="px-5 py-2 text-rose-500 ">
                Business Card ------------------------- 50%
              </p>
              <p className="px-5 py-2 text-cyan-500	">
                Lead Generation ------------------ 10%
              </p>
              <p className="px-5 py-2 text-red-500	">
                Social Page ------------------------ 15%
              </p>
              <p className="px-5 py-2 text-green-900	">
                Url ------------------------------------------- 25%{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" overflow-y-auto bg-white h-60 mt-5 w-[30%]">
          <div className="flex">
            <h1 className="font-bold pt-5 pl-5">Contacts </h1>
            <p className="text-rose-500 pl-80 pt-5 pr-2"> View All</p>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%]">
            <div className="h-10 w-10 mx-5 rounded-full bg-sky-200 bg-no-repeat">
              <p className="text-center pt-2">JL</p>
            </div>
            <div>
              <div>
                <p className="font-bold">John Lorem</p>
              </div>
              <div>
                <p className="text-sm">lormeipsum@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%]">
            <div className="h-10 w-10 mx-5 rounded-full bg-gray-200 bg-no-repeat">
              <p className="text-center pt-2">TS</p>
            </div>
            <div>
              <div>
                <p className="font-bold">Tina Lorem</p>
              </div>
              <div>
                <p className="text-sm">Tinalipsum@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%]">
            <div className="h-10 w-10 mx-5 rounded-full bg-gray-200 bg-no-repeat">
              <p className="text-center pt-2">RS</p>
            </div>
            <div>
              <div>
                <p className="font-bold">Tina Lorem</p>
              </div>
              <div>
                <p className="text-sm">TinaLipsum@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMode;
