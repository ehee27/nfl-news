import Image from "next/image";
import Headlines from "./_components/Headlines";
import HeadlinesCarousel from "./_components/HeadlinesCarousel";
import banner from "/public/new_orleans.jpeg"; //
import Playoffs from "./_components/playoffs/Playoffs";
import ScoreBoard from "./_components/ScoreBoard";

export default function Home() {
  return (
    // <div className="pt-20 bg-gradient-to-r from-stone-800 via-stone-300 to-zinc-800">
    <div className="pt-20 bg-black/90">
      {/* ----------- SCOREBOARD ------------- */}
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}
      <section className="flex container w-[100%] rounded-lg p-1 overflow-x-scroll">
        <ScoreBoard />
      </section>

      {/* ----------- CAROUSEL ------------- */}
      <section className="flex container my-5 bg-black/20 rounded-xl py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] rounded-md">
          <div className="md:col-span-2">
            <HeadlinesCarousel />
          </div>
          <div className="h-[511px] overflow-y-scroll">
            <Headlines />
          </div>
        </div>
      </section>
      {/* ----------- PLAYOFFS ------------- */}
      <section className="container">
        <Playoffs />
      </section>
      {/* ---------- BANNER -------------------------- */}

      <section className="container pb-32">
        <Image src={banner} alt="super bowl banner" width={1200} />
      </section>
    </div>
  );
}
