import { Tag } from "./Tag";
import { useTime } from "@/hooks/useTimezone";

type TableProps = {
  title: string;
  authors: string;
  timestamp: number;
};

export const Table = ({ title, authors, timestamp }: TableProps) => {
  const datetime = useTime({ timestamp });
  return (
    <article className="grid items-center">
      <footer className="flex flex-col items-center gap-2 md:row-span-2 lg:row-auto">
        <p className="font-semibold md:text-3xl leading-7 md:leading-10 text-scheduleTitle text-wrap">
          {title}
        </p>
        <p className="text-[#B3B3B3] text-scheduleAuthor md:text-3xl italic">
          {authors}
        </p>
        <Tag className="min-h-10 min-w-16">{datetime}h</Tag>
      </footer>
    </article>
  );
};
