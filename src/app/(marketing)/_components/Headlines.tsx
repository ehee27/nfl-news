"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Headlines() {
  const [headlinesData, setheadlinesData] = useState(null);
  //
  useEffect(() => {
    fetch(
      "https://xfad3e1okb.execute-api.us-west-2.amazonaws.com/get-headlines"
    )
      .then((res) => res.json())
      .then((res) => setheadlinesData(JSON.parse(res)));
  }, []);
  //   console.log("This", headlinesData);

  return (
    <div className="flex flex-col gap-1 h-[480px] overflow-y-scroll bg-white rounded-lg shadow-md">
      {headlinesData?.map((headline: any, i: any) => (
        <HeadlinesCard key={i} headline={headline} />
      ))}
    </div>
  );
}

function HeadlinesCard({ headline }) {
  return (
    <div className="bg-white">
      <Link href={headline?.link} target="_blank">
        <div>
          <div>
            <div className="flex gap-2 text-black"></div>
            <div>
              <div className="mt-5 px-3">
                <p className="text-left text-xs">{headline?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
