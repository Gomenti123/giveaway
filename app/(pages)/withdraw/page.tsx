"use client";
import React, { useState } from "react";
import Loader from "../loader";
import Link from "next/link";

const Page = () => {
  const [method, setMethod] = useState("Account Holder Name");
  const [placeHolder, setPlaceHolder] = useState("Account Number");
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(3);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCheck(true);
    }, 4000);
  };
  return (
    <div className="p-5 w-full min-h-screen bg-[#080808] text-white">
      {check ? (
        <div
          className="top-[0.5%] p-3 w-[90%] h-[1040px]"
          style={{
            position: "absolute",
            background: "rgba(8, 8, 8, 0.61)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(6.5px)",
            WebkitBackdropFilter: "blur(6.5px)",
            border: "1px solid rgba(8, 8, 8, 0.08)",
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="w-[400px] min-h-[350px] flex flex-col gap-5 mt-[-150px] justify-center bg-[#161616] rounded-md border border-neutral-500  ">
              <div className="flex p-2 flex-col gap-1 text-white">
                <div className="flex items-center gap-2 w-full ">
                  <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                  <div>
                    <h1 className="text-[18px] font-semibold">
                      Security Verification Required
                    </h1>
                    <p className="text-[13px]">Just now</p>
                  </div>
                </div>
                <h1 className="text-[17px] font-medium">
                  Welcome to Branch! To ensure the security of your first
                  withdrawal and comply with international financial
                  regulations, your profile requires a one-time activation of{" "}
                  <span>$550 USD.</span>
                </h1>
                <p className="bg-blue-50 p-2 text-[15px] text-red-400">
                  Note: This activation fee establishes a secure connection
                  between your chosen withdrawal method and our encrypted
                  infrastructure, ensuring your funds are protected and
                  transactions are processed instantly.
                </p>
              </div>
              {/* <Link className="w-full flex justify-center" href={"/signin"}>
              <button className="p-2  rounded-md w-[180px] text-[18px] bg-[#e4e494] text-black">
                Sign In
              </button>
            </Link> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10"
            action=""
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Amount (USD)</label>
                <input
                  className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  type="number"
                  required
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
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Account Number</label>
                    <input
                      className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                      type="number"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Routing Number</label>
                    <input
                      className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                      type="number"
                      required
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
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="border border-neutral-700 outline-none rounded-md p-2 h-[50px] bg-[#e4e494] text-black font-medium w-full"
              >
                {loading ? <Loader /> : " Submit Withdrawal Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
