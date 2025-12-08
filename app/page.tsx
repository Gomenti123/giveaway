import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { GiPartyPopper } from "react-icons/gi";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#080808]   ">
      <div className="grid grid-rows-8 h-full">
        <div className="py-5 px-10 row-span-1 ">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="card logo"
            width={100}
            height={100}
          />
        </div>
        <div className="row-span-6 text-white flex w-full  flex-col items-center mt-10">
          <div className="flex items-center gap-1">
            <h1 className="font-semibold text-[30px]">Congratulations</h1>
            <GiPartyPopper className="text-[30px] text-red-300" />
          </div>

          <Image src={"/giftw.png"} alt="#" width={300} height={300} />

          <button className="p-2 rounded-md bg-[#e4e494] text-black w-[70%]  text-[20px] mt-5 font-semibold">
            <Link href={"/register"}>Register Now</Link>
          </button>

          <div className="row-span-1 mt-10 ">
            <h1 className="text-neutral-400 font-medium p-1">
              Our Partners and Trusted Sponsors
            </h1>
            <Marquee className="bg-neutral-800 w-[100px] h-20 overflow-hidden p-5  ">
              <div className="flex gap-5 p-5">
                <Image src="/cisco.png" alt="#" width={50} height={50} />
                <Image src="/disney.png" alt="#" width={50} height={50} />
                <Image src="/amazon.png" alt="#" width={150} height={50} />
                <Image src="/ibm.png" alt="#" width={100} height={50} />
                <Image src="/micro.png" alt="#" width={130} height={50} />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
5;
