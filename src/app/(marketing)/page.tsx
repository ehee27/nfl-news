import Image from "next/image";
import Headlines from "./_components/headlines/Headlines";
import Carousel from "./_components/headlines/Carousel";
import banner from "/public/new_orleans.jpeg";
import chiefs from "/public/chiefs.png";
import Playoffs from "./_components/playoffs/Playoffs";
import ScoreBoard from "./_components/scoreBoard/ScoreBoard";

export default function Home() {
  return (
    // <div className="pt-20 bg-gradient-to-r from-stone-800 via-stone-300 to-zinc-800">
    <div className="pt-9 md:pt-14 bg-black/90">
      {/* ----------- SCOREBOARD ------------- */}
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}
      <section className="flex container w-[100%] rounded-lg p-1 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ScoreBoard />
      </section>

      {/* ----------- CAROUSEL ------------- */}
      <section className="flex container my-1 bg-black/20 rounded-xl py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] rounded-md">
          <div className="md:col-span-2">
            <Carousel />
          </div>
          <div className="h-[530px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Headlines />
          </div>
        </div>
      </section>
      {/* ----------- PLAYOFFS ------------- */}
      <section className="container">
        <Playoffs />
      </section>
      {/* ---------- BANNER -------------------------- */}

      <section className="container pb-10 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
          <div className="md:col-span-2">
            <Image src={banner} alt="super bowl banner" width={1200} />
          </div>
          <div className="md:col-span-1">
            <Image src={chiefs} alt="super bowl banner" width={1000} />
          </div>
        </div>
      </section>
    </div>
  );
}
