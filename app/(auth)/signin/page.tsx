"use client";

import Loader from "@/app/(pages)/loader";
import Link from "next/link";
import { GiPartyPopper } from "react-icons/gi";

const Page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("Clicked");
    }, 2000);
  };
  const check = false;
  return (
    <div className="bg-[#080808] py-5 px-10 flex flex-col gap-[50px]">
      <h1 className="text-white">LOGO</h1>
      <div className="w-full h-screen">
        <div className="m-5 flex justify-center items-center">
          {check ? (
            <div
              className="top-[0.5%] p-3"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background: "rgba(8, 8, 8, 0.61)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6.5px)",
                WebkitBackdropFilter: "blur(6.5px)",
                border: "1px solid rgba(8, 8, 8, 0.08)",
              }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="w-[300px] min-h-[250px] flex flex-col gap-5 justify-center items-center rounded-md border border-neutral-300 p-2">
                  <div className="flex flex-col gap-1 text-white">
                    <h1 className="text-[20px] font-semibold text-center">
                      Your Information has been successfully registered
                    </h1>
                    <p className="text-[15px] text-red-400">
                      Note: Contact your agent for your unique access token,
                      you'd need it to access your dashboard
                    </p>
                  </div>
                  <Link href={"/signin"}>
                    <button className="p-2  rounded-md w-[180px] text-[18px] bg-[#e4e494] text-black">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="text-white flex flex-col gap-5 pt-[100px]">
          <h1 className="text-[25px] font-semibold">Sign In</h1>
          <div className=" flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              action=""
              className=" w-full min-h-[300px]"
            >
              <div className="flex text-neutral-400 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label>Email Address :</label>
                  <input
                    type="email"
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Access Token :</label>
                  <input
                    type="number"
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                  <p className="text-[12px] text-red-400">
                    Kindly contact your agent to get your unique access token
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#e4e494] mt-5 p-2 w-full flex gap-1 items-center justify-center font-medium rounded-full text-black h-[45px] text-[17px]"
              >
                <h1>Access Dashboard</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
