import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="bg-black/40 rounded-xl p-3 w-[100%] h-[90px] flex flex-col justify-center gap-2 border-2 border-zinc-800">
      <Skeleton className="border-2 border-zinc-700 w-[100%] rounded-xl" />
      <Skeleton className="border-2 border-zinc-700 w-[100%] rounded-xl" />
      <Skeleton className="border-2 border-zinc-700 w-[100%] rounded-xl" />
      <Skeleton className="border-2 border-zinc-700 w-[90%] rounded-xl" />
      <Skeleton className="border-2 border-zinc-700 w-[50%] rounded-xl" />
    </div>
  );
}
