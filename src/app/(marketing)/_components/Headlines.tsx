"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[500px] overflow-x-scroll">
      {headlinesData?.map((headline: any, i: any) => (
        <HeadlinesCard key={i} headline={headline} />
      ))}
    </div>
  );
}

function HeadlinesCard({ headline }) {
  return (
    <>
      <Link href={headline?.link} target="_blank">
        <Card>
          <CardHeader>
            <div className="flex gap-2 text-black">
              <img
                src={headline?.pic}
                height="100px"
                className="rounded-t-lg border-b-4 border-red-600"
              ></img>
              {/* <Image src={headline?.pic} alt="away logo" height={30} width={30} /> */}
            </div>
            <CardDescription>
              <CardTitle className="mt-5">{headline?.title}</CardTitle>
            </CardDescription>
          </CardHeader>
          {/* <CardContent>{headline?.title}</CardContent> */}
        </Card>
      </Link>
    </>
  );
}
