"use client";

import { useEffect, useState } from "react";

export default function ScoreBoard() {
  const [scoresData, setScoresData] = useState(null);
  //
  useEffect(() => {
    fetch("https://5fgc91fn5b.execute-api.us-west-2.amazonaws.com/get-scores")
      .then((res) => res.text())
      .then((res) => JSON.parse(res))
      .then((res) => console.log("THIS", res));

    // console.log(scoresData);
  }, []);
  return (
    <>
      <div>
        <p>These are the scores</p>
      </div>
    </>
  );
}
