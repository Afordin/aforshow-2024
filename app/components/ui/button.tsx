import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-br from-[#FC1C37] to-[#AD40E1] text-white",
          "hover:text-cBlack hover:to-100%",
        ],
        secondary: [
          "text-white",
          "bg-gradient-to-rb bg-gradient-to-rb from-black via-[#331e22] to-[#2c2130]",
          "from-100% hover:from-0%",
        ],
      },
      size: {
        default: "h-10 px-8",
        sm: "h-8  px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/* Extiende el button html y las variantes de cva (size, variant) */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
