import Image from "next/image";
import ninja from "/public/pngTree-NinjaLogo.png";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScoreBoard from "./_components/ScoreBoard";
const scores = [
  {
    awayTeam: "Kansas City",
    awayScore: 27,
    awayLogo: ninja,
    homeTeam: "Buffalo",
    homeScore: 30,
    homeLogo: ninja,
  },
  {
    awayTeam: "Denver",
    awayScore: 42,
    awayLogo: ninja,
    homeTeam: "Atlanta",
    homeScore: 18,
    homeLogo: ninja,
  },
  {
    awayTeam: "Cinncinati",
    awayScore: 27,
    awayLogo: ninja,
    homeTeam: "Los Angeles",
    homeScore: 38,
    homeLogo: ninja,
  },
];

export default function Home() {
  return (
    <>
      {/* <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var--background))_60%]"> */}
      <section className="flex flex-col gap-8 px-4 items-center justify-center text-center text-balance min-h-screen bg-zinc-100">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold m-4 tracking-tight">
          Welcome to NFL Ninja
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          We're scraping NFL data with Puppeteer via a Lambda function. We're
          then writing that data to an S3 bucket, fetching the data and
          rendering it here on this app.{" "}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ScoreBoard />
          {/* {scores.map((item, i) => (
            <BoxScoreCard key={i} box={item} />
          ))} */}
        </div>
      </section>
      {/* <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {scores.map((item, i) => (
            <BoxScoreCard key={i} box={item} />
          ))}
        </div>
      </section> */}
    </>
  );
}

function BoxScoreCard({ box }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Box Score</CardTitle>
        <CardDescription>
          <div className="flex gap-2">
            <Image src={box.awayLogo} alt="away logo" height={30} />
            <p>
              <span>{box.awayTeam}</span>
              <span>{box.awayScore}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Image src={box.homeLogo} alt="home logo" height={30} />
            <p>
              <span>{box.homeTeam}</span>
              <span>{box.homeScore}</span>
            </p>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
