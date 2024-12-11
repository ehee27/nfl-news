"use client";
import { useEffect, useState } from "react";
import AFCWildCard from "./AFCWildCard";
import NFCWildCard from "./NFCWildCard";
import Image from "next/image";
import trophy from "/public/trophy.png";
import afcLogo from "/public/afc.svg.png";
import nfcLogo from "/public/nfc.png";

export default function Playoffs() {
  const [playoffBye, setPlayoffBye] = useState([]);

  useEffect(() => {
    fetch(
      "https://k68h9z54y5.execute-api.us-west-2.amazonaws.com/get-playoffs-bye"
    )
      .then((res) => res.json())
      .then((res) => setPlayoffBye(JSON.parse(res)));
  }, []);

  return (
    <div className="rounded-xl bg-black/20 pb-10">
      {/* <p className="[text-shadow:_0_2px_3px_#4a4a4a] text-zinc-500 text-xl md:text-3xl leading-snug font-manrope font-extrabold">
        PLAYOFF PREDICTOR
      </p> */}
      <div className="py-3">
        <p className="text-green-600 text-xl md:text-3xl font-bold text-center font-serif">
          PLAYOFF PICTURE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-5 rounded-lg">
        {/* ------------------------ AFC ------------------------- */}
        <div className="rounded-xl md:col-span-2">
          <Image src={afcLogo} alt="afc logo" height={40} className="mb-3" />

          <div className="flex gap-2 rounded-lg p-3 text-white shadow-md shadow-black font-semibold text-sm bg-black/40">
            <div className="flex gap-2 w-[50%] pl-2">
              <div className="flex items-center">
                <img
                  src={playoffBye[0]?.afc.byeLogo}
                  alt="bye logo"
                  height={40}
                  width={40}
                ></img>
              </div>
              <div className="flex flex-col">
                <p className="text-xs">{playoffBye[0]?.afc.seedLabel}</p>
                <p className="font-black">{playoffBye[0]?.afc.byeTeam}</p>
                <p className="">Proj: {playoffBye[0]?.afc.byeRecord}</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[45%]">
              <p className="text-xl text-zinc-400 font-black">BYE</p>
            </div>
          </div>
          <AFCWildCard />
        </div>
        {/* ------------------------ TROPHY ------------------------- */}
        <div className="flex justify-center items-center">
          <Image src={trophy} alt="ninja-logo" height={200} />
        </div>

        {/* ------------------------ NFC ------------------------- */}
        <div className="rounded-xl md:col-span-2">
          <Image src={nfcLogo} alt="afc logo" height={40} className="mb-3" />

          <div className="flex gap-2 rounded-lg p-3 text-white shadow-md shadow-black font-semibold text-sm bg-black/40">
            <div className="flex gap-2 w-[50%] pl-2">
              <div className="flex items-center">
                <img
                  src={playoffBye[0]?.nfc.byeLogo}
                  alt="bye logo"
                  height={40}
                  width={40}
                ></img>
              </div>
              <div className="flex flex-col">
                <p className="text-xs">{playoffBye[0]?.nfc.seedLabel}</p>
                <p className="font-black">{playoffBye[0]?.nfc.byeTeam}</p>
                <p className="">Proj: {playoffBye[0]?.nfc.byeRecord}</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[45%]">
              <p className="text-xl text-zinc-400 font-black">BYE</p>
            </div>
          </div>
          <AFCWildCard />
        </div>
      </div>
    </div>
  );
}
