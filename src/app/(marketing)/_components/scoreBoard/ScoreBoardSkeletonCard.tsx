import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col justify-center gap-2 bg-black/40 rounded-xl p-3 w-[190px] h-[95px] shadow-md shadow-black">
      {/* <p className="text-sm text-zinc-400 font-medium">{boxScore?.time}</p> */}
      <Skeleton className="border-2 border-zinc-600 w-[20%] rounded-xl" />
      <div className="flex gap-2 items-center my-1">
        {/* ------------------ Away line ------------------------- */}
        <Skeleton className="border-2 border-zinc-600 h-[20%] w-[10%] rounded-full" />
        <Skeleton className="border-2 border-zinc-600 w-[50%] rounded-xl" />
      </div>
      {/* ------------------ Home line ------------------------- */}
      <div className="flex gap-2 items-center my-1 ">
        <Skeleton className="border-2 border-zinc-600 h-[20%] w-[10%] rounded-full" />
        <Skeleton className="border-2 border-zinc-600 w-[50%] rounded-xl" />
      </div>
    </div>
  );
}
