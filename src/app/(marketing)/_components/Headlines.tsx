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
    <>
      {headlinesData?.map((headline: any, i: any) => (
        <HeadlinesCard key={i} headline={headline} />
      ))}
    </>
  );
}

function HeadlinesCard({ headline }) {
  return (
    <div className="bg-white font-serif p-1">
      <Link href={headline?.link} target="_blank">
        <div className="p-2 border-2 border-zinc-100 rounded-md hover:shadow-inner hover:shadow-zinc-400 transition-all">
          <p className="text-left text-md">{headline?.title}</p>
        </div>
      </Link>
    </div>
  );
}
