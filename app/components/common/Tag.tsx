import { ReactNode } from "react";
import { cn } from "../utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className }: TagProps) => {
  return (
    <div className={cn("w-fit gradiant-tag relative rounded-full bg-gradient-to-br from-caPrimary-500/20 to-caSecondary-500/20 p-2 px-4", className)}>
      {children}
    </div>
  );
};
