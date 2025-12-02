import React from "react";
import { CiWallet } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import Navigation from "./navigation";

const Page = () => {
  return (
    <div className="w-full p-5 h-screen">
      <div className="rounded-md h-[800px] flex flex-col gap-5">
        <h1 className="text-[20px] font-semibold text-neutral-600">
          Hello Jadrolita JAvis
        </h1>
        <div className="border rounded-md h-[200px] p-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-1">
              <CiWallet className="text-[30px]" />
              <p className="text-neutral-500 text-[18px]">Balance</p>
            </div>

            <div className="flex items-center">
              <p className="text-neutral-500 text-[13px]">USD</p>
              <MdKeyboardArrowDown className="text-[20px] text-neutral-500" />
            </div>
          </div>

          <div>
            <div className="flex items-center pt-1">
              <LuDollarSign className="text-[30px]" />
              <h1 className="text-[25px]">20,000.45</h1>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 pt-3 text-[15px]">
              Updated few seconds ago
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-5">
          <div className="border rounded-md h-[100px] "></div>
          <div className="border rounded-md h-[100px] "></div>
          <div className="border rounded-md h-[100px] "></div>
        </div>

        <div className="border rounded-md min-h-[500px] p-2 ">
          <div className="flex justify-between w-full items-center">
            <h1 className="font-semibold text-[18px] text-neutral-700">
              Transactions
            </h1>
            <p className="text-neutral-500 text-[15px]">See All</p>
          </div>

          <div className="w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-neutral-500 text-[20px]">
              No Recent Transaction yet
            </h1>
            <p className="text-neutral-500 text-[15px]">
              Any withdrawal you make will appear here
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <Navigation />
      </div>
    </div>
  );
};

export default Page;
