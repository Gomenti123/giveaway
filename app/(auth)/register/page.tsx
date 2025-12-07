"use client";

import Loader from "@/app/(pages)/loader";
import { Divide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const style = {};
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setOccupation("");
      setCheck(true);
      setLoading(false);
    }, 4000);
  };
  return (
    <div className="bg-[#080808] py-5 px-10 flex flex-col gap-[50px]">
      <div>
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="card logo"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full h-screen">
        <div className="m-5 flex justify-center items-center">
          {check ? (
            <div
              className="top-[0.5%] p-3 w-[90%] h-[1040px]"
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

        <div className="text-white flex flex-col gap-5">
          <h1 className="text-[25px] font-semibold">Sign Up</h1>
          <div className=" flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              action=""
              className=" w-full min-h-[300px]"
            >
              <div className="flex text-neutral-400 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label>Full Name :</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    required
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Email Address :</label>
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Phone Number :</label>
                  <input
                    type="number"
                    value={phoneNumber}
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Occupation :</label>
                  <input
                    type="text"
                    value={occupation}
                    required
                    onChange={(e) => {
                      setOccupation(e.target.value);
                    }}
                    className="border border-neutral-700 outline-none rounded-md p-2 bg-[#0d0d0d]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label>Gender :</label>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                      <label htmlFor="male">Male</label>
                      <input
                        type="checkbox"
                        name="male"
                        id="1"
                        className="border outline-none rounded-md p-1"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <label htmlFor="female">Female</label>
                      <input
                        type="checkbox"
                        name="female"
                        id="1"
                        className="border outline-none rounded-md p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#e4e494] mt-10 p-2 w-full flex gap-1 items-center justify-center font-medium rounded-full text-black h-[45px] text-[17px]"
              >
                {loading ? (
                  <Loader />
                ) : (
                  <div className="flex items-center gap-1">
                    <h1>Claim Prize</h1>
                    <GiPartyPopper className="text-[20px]" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
