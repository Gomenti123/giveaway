import React from "react";
import { CiWallet } from "react-icons/ci";
import { MdKeyboardArrowDown, MdOutlineVerifiedUser } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import Navigation from "./navigation";
import { PiHandWithdraw } from "react-icons/pi";

const Page = () => {
  return (
    <div className="bg-[#080808] text-neutral-700 h-screen">
      <div className="w-full p-5 h-full ">
        <div className="rounded-md h-[800px] flex flex-col gap-5">
          <h1 className="text-[20px] font-semibold text-white">
            Hello Jadrolita JAvis
          </h1>
          <div className=" rounded-md min-h-[100px] p-2 bg-[#e4e494]">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-1">
                <CiWallet className="text-[30px]" />
                <p className="text-[18px]">Balance</p>
              </div>

              <div className="flex items-center">
                <p className=" text-[13px]">USD</p>
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
              <p className="pt-3 text-[15px]">Updated few seconds ago</p>
            </div>
          </div>
          <div className="w-full flex justify-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <div className=" bg-neutral-700 w-[50px] rounded-full h-[50px] flex justify-center items-center ">
                <PiHandWithdraw className="text-neutral-400 text-[30px]" />
              </div>
              <p className="text-neutral-400">Withdraw</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className=" bg-neutral-700 w-[50px] rounded-full h-[50px] flex  flex-col justify-center items-center ">
                <MdOutlineVerifiedUser className="text-neutral-400 text-[30px]" />
              </div>

              <p className="text-neutral-400">Verify</p>
            </div>
          </div>

          <div className="rounded-md  p-2 bg-[#aedcff]">
            <h1>Coming Soon</h1>
          </div>
          <div className=" bg-neutral-200 rounded-md min-h-[400px] p-2 ">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-semibold text-[18px] text-neutral-900">
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
        {/* <div className="flex justify-center items-end">
        <Navigation />
      </div> */}
      </div>
    </div>
  );
};

export default Page;
