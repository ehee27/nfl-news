"use client";
import { Key, useEffect, useState } from "react";

interface HeadlineValues {
  link: string;
  pic: string;
  title: string;
}

import {
  Card,
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
import Loading from "./CarouselLoading";

export default function HeadlinesCarousel() {
  const [headlinesData, setheadlinesData] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  useEffect(() => {
    fetch(
      "https://xfad3e1okb.execute-api.us-west-2.amazonaws.com/get-headlines"
    )
      .then((res) => res.json())
      .then((res) => setheadlinesData(JSON.parse(res)));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    // <Loading />
    <>
      {loading ? (
        <Loading />
      ) : (
        <Carousel className="text-white">
          <CarouselContent>
            {headlinesData?.map(
              (headline: HeadlineValues, i: Key | null | undefined) => (
                <CarouselItem key={i}>
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <img
                          src={headline?.pic}
                          height="100px"
                          className="rounded-xl"
                        ></img>

                        <CardDescription>
                          <div className="py-5">
                            <CardTitle className="w-[70%]">
                              {headline?.title}
                            </CardTitle>
                          </div>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
}
