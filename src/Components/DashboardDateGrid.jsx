import React from "react";
import { PiNumberCircleZeroFill } from "react-icons/pi";


function DashboardDateGrid() {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="md:px-10 py-4 px-7">
        {/* logo */}
        <div className="flex  cursor-pointer justify-between	 items-center gap-2">
          <div>
            <span className="font-bold text-xl">Date Range</span>
          </div>
          <div className="flex text-align:center bg-slate-200 w-50 bg-cover  bg-center rounded-l rounded-r">
            <div className= " flex	h-10  pt-2 text-xs pl-5 text-sky-500 "><PiNumberCircleZeroFill className="pt-1" />
Today</div>
            <div className="	h-10 text-xs pt-2 pl-5 ">Yesterday</div>
            <div className=" h-10 text-xs pt-2 pl-5 ">Last 7 days</div>
            <div className=" h-10 text-xs pt-2  pl-5 ">Last 30 days</div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white text-xs text-gray-500 flex-items-center">
            {" "}
            Start Date
            <input
              type="date"
              id="date-input"
              class="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div className="bg-white text-xs text-gray-500 pl-40 flex-items-center">
            {" "}
            End Date
            <input
              type="date"
              id="date-input"
              class="w-full mt-2 p-2 border rounded-md"
            />
          </div>
          <div>
            <button class="ml-10 mt-5 bg-pink-500 hover:bg-pink-700 rounded-l rounded-r text-white font-bold py-2 px-4">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardDateGrid;
