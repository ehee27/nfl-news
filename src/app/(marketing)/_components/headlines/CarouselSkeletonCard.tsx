import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="bg-black/40 rounded-xl p-3 h-[300px] shadow-md shadow-black flex flex-col justify-center gap-2">
      <Skeleton className="border-2 border-zinc-600 rounded-xl" />
    </div>
  );
}
