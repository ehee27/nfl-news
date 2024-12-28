import SkeletonCard from "./HeadlinesSkeletonCard";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 w-[100%] overflow-hidden">
      {"1234567".split("").map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
