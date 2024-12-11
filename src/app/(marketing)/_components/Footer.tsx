import ninja from "/public/ninja.png";
import Image from "next/image";

export function Footer() {
  return (
    <div className="inset-x-0 bottom-0 flex flex-col justify-center items-center shadow-lg fixed w-full z-10 bg-zinc-800 text-white py-3">
      <Image src={ninja} alt="ninja-logo" height={60} />
      <p className="text-xs">Copyright © 2024 - NFL Ninja</p>
    </div>
  );
}
