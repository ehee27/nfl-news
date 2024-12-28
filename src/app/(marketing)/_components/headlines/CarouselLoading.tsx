import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col h-[300px] w-[100%] md:h-[100%] md:px-3">
      <Skeleton className="border-8 border-zinc-600 h-[90%] w-[100%] rounded-xl" />
      <div className="flex flex-col h-[10%] gap-2 py-3">
        <Skeleton className="border-2 border-zinc-600 w-[90%] rounded-xl" />
        <Skeleton className="border-2 border-zinc-600 w-[40%] rounded-xl" />
      </div>
    </div>
  );
}
