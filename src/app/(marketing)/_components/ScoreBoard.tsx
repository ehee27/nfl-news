"use client";

interface ScoresValues {
  time: string;
  awayLogo: string;
  awayScore: string;
  awayTeam: string;
  homeLogo: string;
  homeScore: string;
  homeTeam: string;
}

import { Key, useEffect, useState } from "react";

export default function ScoreBoard() {
  const [scoresData, setScoresData] = useState([]);

  useEffect(() => {
    fetch("https://5fgc91fn5b.execute-api.us-west-2.amazonaws.com/get-scores")
      .then((res) => res.json())
      .then((res) => setScoresData(JSON.parse(res)));
  }, []);
  // console.log("THIs", scoresData);

  return (
    <div className="flex justify-center items-center gap-2 h-[80px]">
      {scoresData?.map((item: ScoresValues, i: Key | null | undefined) => (
        // <BoxScoreCard key={i} box={item} />
        <div
          key={i}
          className="bg-black/40 rounded-xl p-3 w-[210px] shadow-md shadow-black"
        >
          <p className="text-sm text-zinc-400 font-medium">{item?.time}</p>
          <div className="flex gap-2 items-center my-1">
            {/* ------------------ Away line ------------------------- */}
            <img
              src={item?.awayLogo}
              alt="team logo"
              height={20}
              width={20}
            ></img>
            <div
              className={`flex gap-2 text-sm font-black text-white ${
                !item?.awayScore.includes("-") &&
                item?.awayScore > item?.homeScore
                  ? "text-orange-600"
                  : "text-zinc-400"
              }`}
            >
              <p>{item?.awayTeam}</p>
              <p>{item?.awayScore}</p>
            </div>
          </div>
          {/* ------------------ Home line ------------------------- */}
          <div className="flex gap-2 items-center my-1 ">
            <img
              src={item?.homeLogo}
              alt="team logo"
              height={20}
              width={20}
            ></img>
            <div
              className={`flex gap-2 text-sm font-black text-white ${
                !item?.homeScore.includes("-") &&
                item?.homeScore > item?.awayScore
                  ? "text-orange-600"
                  : "text-zinc-400"
              }`}
            >
              <p>{item?.homeTeam}</p>
              <p>{item?.homeScore}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
