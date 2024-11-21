import Headlines from "./_components/Headlines";
import ScoreBoard from "./_components/ScoreBoard";

export default function Home() {
  return (
    <>
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}
      <section className="flex text-balance bg-zinc-100 overflow-x-scroll pt-24">
        <div className="flex justify-center items-center">
          <p>WEEK 12</p>
        </div>

        <ScoreBoard />
      </section>
      <section className="flex flex-col gap-8 px-4 pb-20 items-center justify-center text-center text-balance bg-zinc-100">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold m-4 tracking-tight pt-10">
          Welcome to NFL Ninja
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          We're scraping NFL data with Puppeteer via a Lambda function. We're
          then writing that data to an S3 bucket, fetching the data and
          rendering it here on this app.{" "}
        </p>
      </section>
      <section className="flex flex-col gap-8 px-4 items-center justify-center text-center text-balance bg-zinc-100 border-8">
        <p>SECTION 2</p>
        <Headlines />
      </section>
    </>
  );
}
