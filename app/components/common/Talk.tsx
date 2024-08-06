import Image from "next/image";
import { Tag } from "./Tag";

type TalkProps = {
  title: string;
  author: string;
  hour: string;
  img: string;
  alt: string;
};

export const Talk = ({ title, author, hour, img, alt }: TalkProps) => {
  return (
    <article className="grid md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] md:grid-rows-[repeat(2,auto)] lg:grid-rows-1 p-8 w-full gap-8 text-center md:text-left [&>*:last-child]:place-self-center">
      <Image
        src={img}
        alt={alt}
        width={128}
        height={128}
        className="rounded-full size-24 md:size-32 mx-auto"
      />
      <footer className="flex flex-col gap-2 md:row-span-2 lg:row-auto">
        <p className="font-semibold md:text-3xl leading-7 md:leading-10 text-scheduleTitle text-wrap">
          {title}
        </p>
        <p className="text-[#B3B3B3] text-scheduleAuthor md:text-3xl italic">
          {author}
        </p>
      </footer>
      <Tag>20.00h</Tag>
    </article>
  );
};
