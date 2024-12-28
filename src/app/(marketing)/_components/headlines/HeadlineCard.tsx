import Link from "next/link";

interface HeadlineValues {
  link: string;
  pic: string;
  title: string;
}
type PropsType = {
  headline: HeadlineValues;
};

export default function HeadlineCard({ headline }: PropsType) {
  return (
    <div className="md:px-1 text-sm font-medium text-white/80 mt-1">
      <Link href={headline?.link} target="_blank">
        <div className="py-2 px-4 border-2 bg-black/60 border-zinc-600 rounded-xl hover:bg-black hover:border-green-600 hover:shadow-inner hover:text-white transition-all">
          <p className="text-left">{headline?.title}</p>
        </div>
      </Link>
    </div>
  );
}
