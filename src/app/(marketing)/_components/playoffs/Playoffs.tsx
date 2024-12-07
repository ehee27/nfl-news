"use client";
import { useEffect, useState } from "react";
import WildCard from "./AFCWildCard";
import AFCWildCard from "./AFCWildCard";
import NFCWildCard from "./NFCWildCard";

export default function Playoffs() {
  const [playoffBye, setPlayoffBye] = useState([]);
  const [playoffWildCard, setPlayoffWildCard] = useState([]);

  useEffect(() => {
    fetch(
      "https://k68h9z54y5.execute-api.us-west-2.amazonaws.com/get-playoffs-bye"
    )
      .then((res) => res.json())
      .then((res) => setPlayoffBye(JSON.parse(res)));
  }, []);

  return (
    <div>
      <p className="[text-shadow:_0_2px_4px_#000000] text-green-500 text-xl md:text-7xl leading-snug font-manrope font-extrabold">
        PLAYOFFS
      </p>
      <div className="font-serif text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ------------------------ AFC ------------------------- */}

          <div className="rounded-lg p-1">
            {/* ------------- BYE ---------------- */}
            <div className="flex gap-2 rounded-md p-3 bg-yellow-400 shadow-md font-bold text-zinc-500">
              <div className="flex gap-2 w-[50%]">
                <div className="flex items-center">
                  <img
                    src={playoffBye[0]?.afc.byeLogo}
                    alt="bye logo"
                    height={50}
                    width={50}
                  ></img>
                </div>
                <div className="flex flex-col">
                  <p>{playoffBye[0]?.afc.seedLabel}</p>
                  <p className="font-bold text-lg font-sans">
                    {playoffBye[0]?.afc.byeTeam}
                  </p>
                  <p>Proj: {playoffBye[0]?.afc.byeRecord}</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <p className="text-xl">BYE</p>
              </div>
            </div>
            {/* ------------- WILDCARD MATCHUPS ---------------- */}
            <AFCWildCard />
          </div>

          {/* ------------------------ NFC ------------------------- */}
          <div className="rounded-lg p-1">
            {/* ------------- BYE ---------------- */}
            <div className="flex gap-2 rounded-md p-3 bg-yellow-400 shadow-md font-bold text-zinc-500">
              <div className="flex gap-2 w-[50%]">
                <div className="flex items-center">
                  <img
                    src={playoffBye[0]?.nfc.byeLogo}
                    alt="bye logo"
                    height={50}
                    width={50}
                  ></img>
                </div>
                <div className="flex flex-col">
                  <p>{playoffBye[0]?.nfc.seedLabel}</p>
                  <p className="font-bold text-lg font-sans">
                    {playoffBye[0]?.nfc.byeTeam}
                  </p>
                  <p>Proj: {playoffBye[0]?.nfc.byeRecord}</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50%]">
                <p className="text-xl">BYE</p>
              </div>
            </div>
            {/* ------------- WILDCARD MATCHUPS ---------------- */}
            <NFCWildCard />
          </div>
        </div>
      </div>
    </div>
  );
}
