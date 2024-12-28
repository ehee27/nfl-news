import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex gap-4 h-[100%] w-[100%] p-3">
      <div className="flex flex-col gap-6 border-2 border-zinc-800 rounded w-[40%] py-10 px-5">
        <Skeleton className="border-8 border-zinc-600 w-[20%] rounded-xl" />
        {"1234567".split("").map((i) => (
          <Skeleton
            key={i}
            className="border-4 border-zinc-700 w-[90%] rounded-xl"
          />
        ))}
      </div>
      <div className="border-2 border-zinc-800 rounded w-[20%] py-3"></div>
      <div className="flex flex-col gap-6 border-2 border-zinc-800 rounded w-[40%] py-10 px-5">
        <Skeleton className="border-8 border-zinc-600 w-[20%] rounded-xl" />
        {"1234567".split("").map((i) => (
          <Skeleton
            key={i}
            className="border-4 border-zinc-700 w-[90%] rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}
