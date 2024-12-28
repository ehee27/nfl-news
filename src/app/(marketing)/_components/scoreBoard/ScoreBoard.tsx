"use client";
import { useEffect, useState } from "react";
import BoxScoreCard from "./BoxScoreCard";
import Loading from "./ScoreBoardLoading";

export default function ScoreBoard() {
  const [scoresData, setScoresData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://5fgc91fn5b.execute-api.us-west-2.amazonaws.com/get-scores")
      .then((res) => res.json())
      .then((res) => setScoresData(JSON.parse(res)));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // console.log("THIs", scoresData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center items-center gap-2 h-[115px]">
          {scoresData?.map((item, i) => (
            <BoxScoreCard key={i} boxScore={item} />
          ))}
        </div>
      )}
    </>
    // <Loading />
  );
}
