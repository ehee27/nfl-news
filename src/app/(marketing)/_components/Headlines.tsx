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
    <div>
      {headlinesData?.map((headline: any, i: any) => (
        <HeadlinesCard key={i} headline={headline} />
      ))}
    </div>
  );
}

function HeadlinesCard({ headline }) {
  return (
    <div className="p-1 text-sm font-medium text-white">
      <Link href={headline?.link} target="_blank">
        <div className="py-3 px-4 border-2 bg-black/60 border-zinc-600 rounded-xl hover:shadow-inner hover:bg-white hover:text-zinc-500 transition-all">
          <p className="text-left">{headline?.title}</p>
        </div>
      </Link>
    </div>
  );
}
