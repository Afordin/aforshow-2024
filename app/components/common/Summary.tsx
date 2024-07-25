import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../utils";

interface Props {
  className?: string;
  title: string;
}

export const Summary = ({
  title,
  className,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <details className={cn("w-full group", className)}>
      <summary className="font-bold text-[1.75rem] text-white list-none cursor-pointer relative flex items-center justify-between">
        {title}
        <ChevronRight className="transition group-open:rotate-90" />
      </summary>
      {children}
    </details>
  );
};
