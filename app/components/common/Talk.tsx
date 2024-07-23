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
    <article className="flex flex-col md:flex-row justify-between w-full gap-8 items-center text-center md:text-left">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <Image
          src={img}
          alt={alt}
          width={128}
          height={128}
          className="rounded-full w-24 h-24 md:w-32 md:h-32"
        />
        <div className="flex flex-col gap-2">
          <p className="font-semibold md:text-3xl md:leading-10 text-lg text-wrap">
            {title}
          </p>
          <p className="text-[#B3B3B3] text-sm md:text-3xl italic">{author}</p>
        </div>
      </div>

      <Tag>20.00h</Tag>
    </article>
  );
};
