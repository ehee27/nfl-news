"use client";

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
    <div className="flex justify-center items-center gap-2 h-[80px]">
      {scoresData?.map((item, i) => (
        <BoxScoreCard key={i} box={item} />
      ))}
    </div>
  );
}

function BoxScoreCard({ box }) {
  // console.log("This is the box", box);
  const awayImage = box?.away?.awayLogo;
  const homeImage = box?.home?.homeLogo;
  const awayScore = box?.away.awayScore;
  const homeScore = box?.home.homeScore;

  //
  return (
    // <div className="bg-white rounded-md p-3 w-[210px]">
    <div className="bg-black/40 rounded-xl p-3 w-[210px] shadow-md shadow-black">
      <p className="text-sm text-zinc-400 font-medium">{box?.time}</p>
      <div className="flex gap-2 items-center my-1">
        {/* ------------------ Away line ------------------------- */}
        <img src={awayImage} alt="team logo" height={20} width={20}></img>
        <div
          className={`flex gap-2 text-sm font-black text-white ${
            !awayScore.includes("-") && awayScore > homeScore
              ? "text-orange-600"
              : "text-zinc-400"
          }`}
        >
          <p>{box?.away.awayTeam}</p>
          <p>{awayScore}</p>
        </div>
      </div>
      {/* ------------------ Home line ------------------------- */}
      <div className="flex gap-2 items-center my-1 ">
        <img src={homeImage} alt="team logo" height={20} width={20}></img>
        <div
          className={`flex gap-2 text-sm font-black text-white ${
            !homeScore.includes("-") && homeScore > awayScore
              ? "text-orange-600"
              : "text-zinc-400"
          }`}
        >
          <p>{box?.home.homeTeam}</p>
          <p>{homeScore}</p>
        </div>
      </div>
    </div>
  );
}
