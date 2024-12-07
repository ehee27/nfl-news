import Headlines from "./_components/Headlines";
import HeadlinesCarousel from "./_components/HeadlinesCarousel";
import banner from "/public/nfl-banner.jpg";
import Playoffs from "./_components/playoffs/Playoffs";
import ScoreBoard from "./_components/ScoreBoard";

export default function Home() {
  return (
    // <div className="pt-20 h-screen bg-gradient-to-r from-stone-800 via-stone-300 to-zinc-800">
    <div className="pt-20 bg-zinc-100">
      {/* ----------- SCOREBOARD ------------- */}
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}
      <section className="flex container w-[100%] h-[20%] bg-zinc-100 rounded-lg p-1 overflow-x-scroll">
        <ScoreBoard />
      </section>
      {/* ----------- CAROUSEL ------------- */}
      <section className="flex container my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] bg-white rounded-md">
          <div className="md:col-span-2">
            <HeadlinesCarousel />
          </div>
          <div className="h-[500px] overflow-y-scroll">
            <Headlines />
          </div>
          {/* <div className="md:col-span-2">
            <HeadlinesCarousel />
          </div> */}
          {/* ----------- HEADLINES ------------- */}
          {/* <div className="h-[50%] overflow-y-scroll">
            <Headlines />
          </div> */}
        </div>
      </section>
      {/* ----------- PLAYOFFS ------------- */}
      <section className="container">
        <Playoffs />
      </section>

      {/* ---------- BANNER -------------------------- */}
      {/* <section className="flex flex-col justify-center text-center text-balance bg-zinc-100 container border-8 border-red-400">
        <Image src={banner} alt="banner" width={1350} />
      </section> */}
      {/* ---------- MEDIA -------------------------- */}
      {/* <section className="flex flex-col px-4 py-2 items-center justify-center text-balance bg-zinc-100 container h-[43%] border-8 border-red-400">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[100%]">
          <div className="col-span-2">
            <HeadlinesCarousel />
          </div>
          <div className="flex flex-col h-[100%] overflow-y-scroll bg-white rounded-lg shadow-md">
            <Headlines />
          </div>
        </div>
      </section> */}

      {/* ---------- PLAYOFFS -------------------------- */}
    </div>
  );
}

/* <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold m-4 tracking-tight pt-10">
          Welcome to NFL Ninja
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          We're scraping NFL data with Puppeteer via a Lambda function. We're
          then writing that data to an S3 bucket, fetching the data and
          rendering it here on this app.
        </p> */
