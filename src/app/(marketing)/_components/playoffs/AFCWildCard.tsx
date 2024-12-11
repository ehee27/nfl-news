"use client";
import { useEffect, useState } from "react";

export default function AFCWildCard() {
  const [playoffWildCard, setPlayoffWildCard] = useState([]);

  useEffect(() => {
    fetch(
      "https://0jhbif3nt0.execute-api.us-west-2.amazonaws.com/get-playoffs-wildcard"
    )
      .then((res) => res.json())
      .then((res) => setPlayoffWildCard(JSON.parse(res)));
  }, []);

  const afcWildCard = playoffWildCard.slice(0, 3);

  return (
    <div className="rounded-lg text-sm">
      {afcWildCard?.map((item, i) => (
        // <div
        //   key={i}
        //   className="flex rounded-lg py-2 px-5 mt-2 shadow-md shadow-zinc-300 bg-gradient-to-r from-zinc-400 via-stone-300 to-zinc-400 text-white"
        // >
        <div
          key={i}
          className="flex rounded-lg py-3 px-5 mt-2 shadow-md shadow-black font-semibold text-white bg-black/80"
        >
          <div className="flex items-center gap-2 w-[45%]">
            <div className="flex items-center">
              <img
                src={item.wildCard1AwayLogo}
                alt="bye logo"
                height={40}
                width={40}
              ></img>
            </div>
            <div className="flex flex-col font-bold">
              <p className="text-xs">{item.wildCard1AwaySeed}</p>
              <p className="font-black">{item.wildCard1AwayTeam}</p>
              <p>Proj: {item.wildCard1AwayRecord}</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[10%]">
            <p className="text-zinc-300 text-lg font-bold">@</p>
          </div>
          <div className="flex justify-end items-center gap-2 w-[45%]">
            <div className="flex flex-col font-bold text-right">
              <p>{item.wildCard1HomeSeed}</p>
              <p className="font-black font-sans text-sm">
                {item.wildCard1HomeTeam}
              </p>
              <p>Proj: {item.wildCard1HomeRecord}</p>
            </div>
            <div className="flex items-center">
              <img
                src={item.wildCard1HomeLogo}
                alt="bye logo"
                height={40}
                width={40}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
