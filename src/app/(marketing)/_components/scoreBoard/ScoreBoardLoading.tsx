import SkeletonCard from "./ScoreBoardSkeletonCard";

export default function Loading() {
  return (
    <div className="flex gap-2 w-[100%] overflow-hidden py-3">
      {"123456".split("").map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
