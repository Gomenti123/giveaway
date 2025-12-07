import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#080808] py-5 px-10 ">
      <div>
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="card logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
5;
