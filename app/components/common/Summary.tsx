import  { useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("w-full group", className)}>
      <div
        className="font-bold text-[1.75rem] text-white cursor-pointer relative flex items-center justify-between"
        onClick={toggleOpen}
      >
        {title}
        <ChevronRight className={cn("transition", isOpen ? "rotate-90" : "")} />
      </div>
      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px]" : "max-h-0"
        )}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};