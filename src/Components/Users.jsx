import React from "react";

function Users() {
  return (
    <>
      <div>
        <div className=" bg-white h-60 mt-5 w-[30%]">
          <div className="flex">
            <h1 className="font-bold pt-5 pl-5">Users </h1>
            <p className="text-rose-500 pl-80 pt-5 pr-2"> View All</p>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%] ">
            <div className="h-10 w-10 mx-5 rounded-full bg-gray-200 bg-no-repeat">
              <p className="text-center text-white pt-2">DL</p>
            </div>
            <div>
              <div>
                <p className="font-bold">David Lorem</p>
              </div>
              <div>
                <p className="text-xs">Email:lormeipsum@gmail.com</p>
              </div>
            </div>
            <div className="space-x-3">
              <div>
                <p className=" text-gray-400 float-right">Card Taped</p>
              </div>
              <div>
                <p className="font-bold float-right">24 Times</p>
              </div>
            </div>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%]">
            <div className="h-10 w-10 mx-5 rounded-full bg-pink-200 bg-no-repeat">
              <p className="text-center text-pink-400	 pt-2">JW</p>
            </div>
            <div>
              <div>
                <p className="font-bold">John Willson</p>
              </div>
              <div>
                <p className="text-xs">Email:Siddique@geeconglobal.com</p>
              </div>
            </div>
            <div className=" float-right">
              <div>
                <p className="text-gray-400 float-right">Card Taped</p>
              </div>
              <br></br>
              <div>
                <p className="font-bold float-right">24 Times</p>
              </div>
            </div>
          </div>
          <div className="flex bg-white h-10 mt-5 w-[100%] ">
            <div className="h-10 w-10 mx-5 rounded-full bg-gray-200 bg-no-repeat">
              <p className="text-center text-white pt-2">JS</p>
            </div>
            <div>
              <div>
                <p className="font-bold">Julia Smith</p>
              </div>
              <div>
                <p className="text-sm">Email:Siddique@geeconglobal.com</p>
              </div>
            </div>
            <div className=" float-right">
              <div className="">
                <p className="text-gray-400 ">Card Taped</p>
              </div>
              <br></br>
              <div>
                <p className="font-bold">24 Times</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
