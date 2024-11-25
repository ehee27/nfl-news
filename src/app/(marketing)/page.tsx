import Image from "next/image";
import Headlines from "./_components/Headlines";
import { HeadlinesCarousel } from "./_components/HeadlinesCarousel";
import banner from "/public/nfl-banner.jpg";
import Playoffs from "./_components/Playoffs";

export default function Home() {
  return (
    <>
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}

      <section className="flex flex-col gap-8 px-4 justify-center text-center text-balance bg-zinc-100 pt-5">
        <div className="flex items-center">
          <Image src={banner} alt="banner" width={1350} />
        </div>
      </section>
      <section className="flex flex-col gap-8 px-4 py-2 items-center justify-center text-center text-balance bg-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <HeadlinesCarousel />
          </div>
          <div>
            <Headlines />
          </div>
        </div>
      </section>
      <section className="mb-20">
        <Playoffs />
      </section>
    </>
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
