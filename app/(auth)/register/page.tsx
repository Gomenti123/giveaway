"use client";
import { log } from "node:console";
import React, { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { AlertDialogDemo } from "./alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("Clicked");
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setOccupation("");
    }, 2000);
  };
  return (
    <div className="w-full h-screen p-10 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="rounded-md border w-full min-h-[300px] p-5"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>Full Name :</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
              className="border outline-none rounded-md p-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email Address :</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border outline-none rounded-md p-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Phone Number :</label>
            <input
              type="number"
              value={phoneNumber}
              required
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="border outline-none rounded-md p-1"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Occupation :</label>
            <input
              type="text"
              value={occupation}
              required
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
              className="border outline-none rounded-md p-1"
              placeholder="Enter your name"
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
          className="bg-amber-400 mt-5 p-2 w-full flex gap-1 items-center justify-center rounded-full"
        >
          <AlertDialogDemo check={check} />
        </button>
      </form>
    </div>
  );
};

export default Page;
