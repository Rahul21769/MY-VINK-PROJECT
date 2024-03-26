import React from "react";

function DashboardGraph() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex bg-white h-85 mt-5 w-[70%]">
          <div className="bg-white h-80 w-50">
            <div className="font-bold pt-2 pl-10">
              Weekly Card Taps,14000
              <div className="flex">
                <img src="./images/Graph.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white h-45 mt-5 w-[100%]">
            <div className="flex">
              <h1 className="bg-white font-bold pl-5">Taps</h1>
              <p className="bg-white text-sm pl-40  pr-5"> This Weeks</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 pl-5">1,400</h1>
            <div className="flex">
              <p className="flex bg-teal-100 ms-8 mt-8 mb-5 text-align:center  h-18 w-15">
                {" "}
                ↑ + 33% last week
              </p>
            </div>
          </div>
          <div className="bg-white h-45 mt-5 w-[100%]">
            <div className="flex">
              <h1 className="bg-white font-bold pl-5">Leads</h1>
              <p className="bg-white text-sm pl-40 pr-5"> This Weeks</p>
            </div>
            <h1 className="font-bold text-6xl pt-3 pl-5">2200</h1>
            <div className="flex">
              <p className="flex bg-teal-100 ms-8 mt-8 mb-5 text-align:center ml-15 h-18 w-15">
                {" "}
                ↑ + 20% last week
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardGraph;
