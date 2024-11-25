"use client";

import Image from "next/image";
import { playoffData } from "../../../../playoffsData";
import ninja from "/public/pngTree-NinjaLogo.png";
import nfcLogo from "/public/nfc.png";
import afcLogo from "/public/afc.svg.png";
import { useEffect, useState } from "react";

const afc = playoffData.slice(0, 16);
const nfc = playoffData.slice(16);

export default function Playoffs() {
  const [playoffData, setPlayoffData] = useState([]);

  useEffect(() => {
    fetch("https://59an2os5qg.execute-api.us-west-2.amazonaws.com/get-playoffs")
      .then((res) => res.json())
      .then((res) => setPlayoffData(JSON.parse(res)));
  }, []);
  const afc = playoffData.slice(0, 7);
  const nfc = playoffData.slice(16, 23);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-4 text-4xl text-zinc-500 font-black p-2">
          <Image src={afcLogo} alt="logo" height={60} width={60} />
          <p>AFC</p>
        </div>
        {afc?.map((team, i) => (
          <div key={i} className="flex items-center gap-4 shadow m-2 p-1">
            <p className="font-bold text-zinc-400">{team.rank}</p>
            <img src={team.logo} alt="team logo" height={30} width={30}></img>
            <p className="text-zinc-600 font-black">{team.team}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-4 items-center text-4xl text-zinc-500 font-black p-2">
          <Image src={nfcLogo} alt="logo" height={60} width={60} />
          <p>NFC</p>
        </div>
        {nfc?.map((team, i) => (
          <div key={i} className="flex items-center gap-4 shadow m-2 p-1">
            <p className="font-bold text-zinc-400">{team.rank}</p>
            <img src={team.logo} alt="team logo" height={30} width={30}></img>

            <p className="text-zinc-600 font-black">{team.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
