"use client";
import { useEffect, useState } from "react";
import AFCWildCard from "./AFCWildCard";
import NFCWildCard from "./NFCWildCard";
import Image from "next/image";
import trophy from "/public/trophy.png";
import afcLogo from "/public/afc.svg.png";
import nfcLogo from "/public/nfc.png";
import vercel from "/public/vercel.svg";
import Loading from "./PlayoffsLoading";

interface PlayoffItemValues {
  afcByeLogo: string;
  afcSeedLabel: string;
  afcByeTeam: string;
  afcByeRecord: string;
  nfcByeLogo: string;
  nfcSeedLabel: string;
  nfcByeTeam: string;
  nfcByeRecord: string;
}

export default function Playoffs() {
  const [playoffBye, setPlayoffBye] = useState<Array<PlayoffItemValues>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://k68h9z54y5.execute-api.us-west-2.amazonaws.com/get-playoffs-bye"
    )
      .then((res) => res.json())
      .then((res) => setPlayoffBye(JSON.parse(res)));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // console.log("Playoffs", playoffBye);

  return (
    // <Loading />
    <div className="rounded-xl bg-black/20 pb-10 mt-4 -mx-6">
      <div className="py-3">
        <p className="text-green-600 text-xl md:text-3xl font-bold text-center font-serif">
          PLAYOFF PICTURE
        </p>
      </div>
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-5 rounded-lg">
            {/* ------------------------ AFC ------------------------- */}
            <div className="rounded-xl md:col-span-2">
              <div className="flex justify-center items-center">
                <Image
                  src={afcLogo}
                  alt="afc logo"
                  height={40}
                  className="mb-3"
                />
              </div>

              <div className="flex gap-2 rounded-lg p-3 text-white shadow-md shadow-black font-semibold text-sm bg-black/40">
                <div className="flex gap-2 w-[50%] pl-1">
                  <div className="flex items-center">
                    <Image
                      // src={playoffBye[0]?.afcByeLogo}
                      src={playoffBye[0]?.afcByeLogo || vercel}
                      alt="bye logo"
                      height={40}
                      width={40}
                      style={{ width: "auto", height: "auto" }}
                    ></Image>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs">{playoffBye[0]?.afcSeedLabel}</p>
                    <p className="font-black">{playoffBye[0]?.afcByeTeam}</p>
                    <p className="">Proj: {playoffBye[0]?.afcByeRecord}</p>
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
              <Image
                src={trophy}
                alt="ninja-logo"
                // height={200}
                // width={200}
                className="h-[200px] w-[165px] hidden md:block"
                // style={{ width: "auto", height: "auto" }}
              />
            </div>

            {/* ------------------------ NFC ------------------------- */}
            <div className="rounded-xl md:col-span-2">
              <div className="flex justify-center items-center">
                <Image
                  src={nfcLogo}
                  alt="afc logo"
                  height={40}
                  className="mb-3"
                />
              </div>

              <div className="flex gap-2 rounded-lg p-3 text-white shadow-md shadow-black font-semibold text-sm bg-black/40">
                <div className="flex gap-2 w-[50%] pl-1">
                  <div className="flex items-center">
                    <Image
                      // src={playoffBye[0]?.nfcByeLogo}
                      src={playoffBye[0]?.nfcByeLogo || vercel}
                      alt="bye logo"
                      height={40}
                      width={40}
                      style={{ width: "auto", height: "auto" }}
                    ></Image>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs">{playoffBye[0]?.nfcSeedLabel}</p>
                    <p className="font-black">{playoffBye[0]?.nfcByeTeam}</p>
                    <p className="">Proj: {playoffBye[0]?.nfcByeRecord}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[45%]">
                  <p className="text-xl text-zinc-400 font-black">BYE</p>
                </div>
              </div>
              <NFCWildCard />
            </div>
          </div>
        )}
      </>
    </div>
  );
}
