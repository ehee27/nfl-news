"use client";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeadlinesCarousel() {
  const [headlinesData, setheadlinesData] = useState(null);
  //
  useEffect(() => {
    fetch(
      "https://xfad3e1okb.execute-api.us-west-2.amazonaws.com/get-headlines"
    )
      .then((res) => res.json())
      .then((res) => setheadlinesData(JSON.parse(res)));
  }, []);
  return (
    <Carousel className="bg-white text-zinc-400">
      <CarouselContent>
        {headlinesData?.map((headline: any, i: any) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card>
                <CardHeader>
                  <img
                    src={headline?.pic}
                    height="100px"
                    // className="rounded-t-lg border-b-8 border-red-600"
                    className="rounded-t-lg"
                  ></img>

                  <CardDescription>
                    <CardTitle className="mt-5 pr-10">
                      {headline?.title}
                    </CardTitle>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
