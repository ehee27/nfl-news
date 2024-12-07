import Link from "next/link";
import ninja from "/public/pngTree-NinjaLogo.png";
import Image from "next/image";

export function NavBar() {
  return (
    <>
      <header className="flex flex-col justify-center items-center shadow-lg fixed w-full z-10 bg-zinc-800">
        <div className="flex w-[100%]">
          <div className="w-[50%]">
            <div className="w-[35%] bg-red-600 border-r-8 border-red-700">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg mr-auto"
              >
                <Image src={ninja} alt="ninja-logo" height={60} />
                <p className="text-white font-black text-3xl"> NFLninja</p>
              </Link>
            </div>
          </div>
          <nav className="flex justify-center items-center gap-10 container font-semibold text-white w-[50%] font-serif">
            {" "}
            <Link href="/" className="text-lg">
              Headlines
            </Link>
            <Link href="/" className="text-lg">
              Scores
            </Link>
            <Link href="/" className="text-lg">
              Teams
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
