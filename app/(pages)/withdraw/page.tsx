"use client";
import React, { useState } from "react";

const Page = () => {
  const [method, setMethod] = useState("Account Holder Name");
  const [placeHolder, setPlaceHolder] = useState("Account Number");
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(3);
  return (
    <div className="p-5 w-full min-h-screen bg-[#080808] text-white">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-[25px] font-semibold ">Withdraw Funds</h1>
          <p className="text-[15px] text-neutral-400">
            Transfer your funds to your bank account or to your digital wallet
          </p>
        </div>

        <div className="flex flex-col gap-5 p-3 min-h-[300px] rounded-md">
          {/* <div>
            <h1 className="text-[20px] font-semibold">Withdraw Funds</h1>
            <p className="text-[15px] text-neutral-400">
              Choose your preferred withdrawal method
            </p>
          </div> */}

          <div className="flex flex-col gap-3">
            <p className="text-[13px] text-neutral-400">Withdrawal Method</p>
            <div
              onClick={() => {
                setMethod("CashApp Tag");
                setPlaceHolder("$Username");
                setShow(false);
                setActive(1);
              }}
              className={`${
                active == 1
                  ? "bg-[#dada62] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
                  : "bg-[#e4e494] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
              }`}
              // className="bg-[#dada62] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
            >
              Cash App{" "}
            </div>
            <div
              className={`${
                active == 2
                  ? "bg-[#dada62] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
                  : "bg-[#e4e494] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
              }`}
              onClick={() => {
                setMethod("PayPal Email");
                setPlaceHolder("email@example.com");
                setShow(false);
                setActive(2);
              }}
            >
              PayPal
            </div>
            <div
              className={`${
                active == 3
                  ? "bg-[#dada62] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
                  : "bg-[#e4e494] text-black font-medium flex justify-center items-center rounded-md h-[70px]"
              }`}
              onClick={() => {
                setMethod("Account Holder Name");
                setPlaceHolder("Account Number");
                setShow(true);
                setActive(3);
              }}
            >
              Bank Account
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Amount (USD)</label>
              <input
                className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                type="text"
                placeholder="0.00"
              />
              <p className="text-neutral-400 text-[15px]">
                Available balance: $20,000.45{" "}
              </p>
            </div>
            {show ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Bank Name</label>
                  <input
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                    type="text"
                    placeholder={placeHolder}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Account Number</label>
                  <input
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                    type="text"
                    placeholder={placeHolder}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Routing Number</label>
                  <input
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                    type="text"
                    placeholder={placeHolder}
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-col gap-1">
              <label htmlFor="">{method}</label>
              <input
                className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                type="text"
                placeholder={placeHolder}
              />
            </div>
          </div>

          <div>
            <button className="border border-neutral-700 outline-none rounded-md p-2 bg-[#e4e494] text-black font-medium w-full">
              Submit Withdrawal Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
