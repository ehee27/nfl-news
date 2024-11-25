"use client";
import ninja from "/public/pngTree-NinjaLogo.png";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";

export default function ScoreBoard() {
  const [scoresData, setScoresData] = useState([]);

  useEffect(() => {
    fetch("https://5fgc91fn5b.execute-api.us-west-2.amazonaws.com/get-scores")
      .then((res) => res.json())
      .then((res) => setScoresData(JSON.parse(res)));
  }, []);

  return (
    <div className="flex gap-1">
      {scoresData?.map((item, i) => (
        <BoxScoreCard key={i} box={item} />
      ))}
    </div>
  );
}

function BoxScoreCard({ box }) {
  return (
    <div className="flex flex-col py-2 rounded shadow-md bg-white w-[200px]">
      {/* <p>{box?.time}</p> */}
      <p className="text-xs text-left mx-3">{new Date().toLocaleString()}</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-3 justify-center items-center text-xs">
          <Image src={ninja} alt="logo" height={30} width={30} />
          <p>{box?.away.awayTeam}</p>
        </div>
        <div className="mr-3 text-xs">{box?.away.awayScore}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-3 justify-center items-center text-xs">
          <Image src={ninja} alt="logo" height={30} width={30} />

          <p>{box?.home.homeTeam}</p>
        </div>
        <div className="mr-3 text-xs">{box?.home.homeScore}</div>
      </div>
    </div>

    // <Card>

    //   <CardHeader>
    //     <CardTitle>{box?.time}</CardTitle>
    //     <CardDescription>
    //       <div className="flex gap-2 text-black">
    //         <Image src={ninja} alt="away logo" height={30} width={30} />
    //         <p className="text-black">
    //           <span>{box?.away.awayTeam}</span>
    //           <span>{box?.away.awayScore}</span>
    //         </p>
    //       </div>
    //       <div className="flex gap-2">
    //         <Image src={ninja} alt="home logo" height={30} width={30} />
    //         <p>
    //           <span>{box?.home.homeTeam}</span>
    //           <span>{box?.home.homeScore}</span>
    //         </p>
    //       </div>
    //     </CardDescription>
    //   </CardHeader>
    // </Card>
  );
}
