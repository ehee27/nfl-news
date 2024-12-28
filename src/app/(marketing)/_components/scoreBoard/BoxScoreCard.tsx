interface BoxScoreValues {
  time: string;
  awayLogo: string;
  awayScore: string;
  awayTeam: string;
  homeLogo: string;
  homeScore: string;
  homeTeam: string;
}

type PropsType = {
  boxScore: BoxScoreValues;
};

export default function BoxScoreCard({ boxScore }: PropsType) {
  return (
    <div className="bg-black/50 rounded-xl p-3 w-[200px] shadow-md shadow-black">
      <p className="text-sm text-zinc-400 font-medium">{boxScore?.time}</p>
      <div className="flex gap-2 items-center my-1">
        {/* ------------------ Away line ------------------------- */}
        <img
          src={boxScore?.awayLogo}
          alt="team logo"
          height={20}
          width={20}
        ></img>
        <div
          className={`flex gap-2 text-sm font-black text-white ${
            !boxScore?.awayScore.includes("-") &&
            boxScore?.awayScore > boxScore?.homeScore
              ? "text-orange-600"
              : "text-zinc-500"
          }`}
        >
          <p>{boxScore?.awayTeam}</p>
          <p>{boxScore?.awayScore}</p>
        </div>
      </div>
      {/* ------------------ Home line ------------------------- */}
      <div className="flex gap-2 items-center my-1 ">
        <img
          src={boxScore?.homeLogo}
          alt="team logo"
          height={20}
          width={20}
        ></img>
        <div
          className={`flex gap-2 text-sm font-black text-white ${
            !boxScore?.homeScore.includes("-") &&
            boxScore?.homeScore > boxScore?.awayScore
              ? "text-orange-600"
              : "text-zinc-500"
          }`}
        >
          <p>{boxScore?.homeTeam}</p>
          <p>{boxScore?.homeScore}</p>
        </div>
      </div>
    </div>
  );
}
