"use client";
import { useEffect, useState } from "react";
import HeadlineCard from "./HeadlineCard";
import Loading from "./HeadlinesLoading";

export default function Headlines() {
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
  // console.log("This", headlinesData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {headlinesData?.map((headline, i) => (
            <HeadlineCard key={i} headline={headline} />
          ))}
        </div>
      )}
    </>
    // <Loading />
  );
}
