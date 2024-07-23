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
    <article className="flex justify-between w-full items-center">
      <div className="flex gap-8 items-center">
        <Image
          src={img}
          alt={alt}
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-3xl">{title}</p>
          <p className="text-[#B3B3B3] text-3xl italic">{author}</p>
        </div>
      </div>

      <Tag>20.00h</Tag>
    </article>
  );
};
