import ninja from "/public/ninja.png";
import Image from "next/image";

export function Footer() {
  return (
    <div className="inset-x-0 bottom-0 flex flex-col justify-center items-center shadow-lg w-full z-10 text-white py-2 bg-black">
      <Image src={ninja} alt="ninja-logo" height={60} />
      <p className="text-xs">Copyright © 2025 - NFLninja</p>
    </div>
  );
}
