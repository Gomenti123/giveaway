"use client";
import React, { useState } from "react";

const Page = () => {
  const [method, setMethod] = useState("Bank Account");
  const [placeHolder, setPlaceHolder] = useState("Account Number");
  const [show, setShow] = useState(true);
  return (
    <div className="p-5 w-full">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-[20px] font-semibold ">Withdraw Funds</h1>
          <p className="text-[15px] text-neutral-500">
            Transfer your funds to your bank account or to your digital wallet
          </p>
        </div>

        <div className="border flex flex-col gap-5 p-3 min-h-[300px] rounded-md">
          <div>
            <h1 className="text-[20px] font-semibold">Withdraw Funds</h1>
            <p className="text-[15px] text-neutral-500">
              Choose your preferred withdrawal method
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[13px] text-neutral-500">Withdrawal Method</p>
            <div
              onClick={() => {
                setMethod("CashApp Tag");
                setPlaceHolder("$Username");
                setShow(false);
              }}
              className="bg-green-200 flex justify-center items-center rounded-md h-[70px]"
            >
              Cash App{" "}
            </div>
            <div
              className="bg-green-200 rounded-md h-[70px] flex justify-center items-center "
              onClick={() => {
                setMethod("PayPal Email");
                setPlaceHolder("email@example.com");
                setShow(false);
              }}
            >
              PayPal
            </div>
            <div
              className="bg-green-200 rounded-md h-[70px] flex justify-center items-center "
              onClick={() => {
                setMethod("Bank Account");
                setPlaceHolder("Account Number");
                setShow(true);
              }}
            >
              Bank Account
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Amount (USD)</label>
              <input
                className="outline-none border rounded-md p-2"
                type="text"
                placeholder="0.00"
              />
              <p className="text-neutral-500 text-[15px]">
                Available balance: $20,000.45{" "}
              </p>
            </div>
            {show ? (
              <div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">{method}</label>
                  <input
                    className="outline-none border rounded-md p-2"
                    type="text"
                    placeholder={placeHolder}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">{method}</label>
                  <input
                    className="outline-none border rounded-md p-2"
                    type="text"
                    placeholder={placeHolder}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">{method}</label>
                  <input
                    className="outline-none border rounded-md p-2"
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
                className="outline-none border rounded-md p-2"
                type="text"
                placeholder={placeHolder}
              />
            </div>
          </div>

          <div>
            <button className="border rounded-md w-full p-2 bg-linear-to-r">
              Submit Withdrawal Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
