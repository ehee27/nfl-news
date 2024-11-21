import Link from "next/link";
import ninja from "/public/pngTree-NinjaLogo.png";
import Image from "next/image";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed w-full z-10 bg-background/95 h-20">
      <nav className="flex items-center gap-10 container font-semibold text-black">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg mr-auto"
        >
          <Image src={ninja} alt="ninja-logo" height={60} />
          NFLNINJA
        </Link>
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
    </header>
  );
}
