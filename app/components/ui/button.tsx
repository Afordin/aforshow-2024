import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-br from-caPrimary-500 via-caSecondary-500 to-white text-caWhite",
          "hover:text-caBlack",
          "buttonBgTransition",
        ],
        secondary: [
          "bg-gradient-to-br from-black via-[#331e22] to-[#2c2130] text-white",
          "bg-gradient-to-br from-caPrimary-500 via-caSecondary-500 to-white text-caWhite",
          "from-100% hover:from-0%",
          "buttonBgTransition"
        ],
        twitch: [
          "bg-gradient-to-br from-[#4b2a88] via-[#7b4dda] to-[#2e195c] text-white",
          "buttonBgTransition",
        ]
      },
      size: {
        default: "py-2 px-8 text-sm h-10",
        xs: "py-1 px-3 text-xs h-6",
        sm: "py-1.5 px-4 text-sm h-8",
        lg: "py-3 px-6 text-base h-12",
        xl: "py-3 px-6 text-lg h-14",
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
  // Crear una clase adicional para la variante secondary con padding específico
  const additionalStyles = variant === "secondary" ? {
    paddingLeft: 2,
    paddingRight: 2,
  } : {};

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      style={{...additionalStyles}}
      {...props}
    >
      {variant === 'secondary' ? (
        <span className="text-white bg-gradient-to-rb bg-black from-black via-[#331e22] to-[#2c2130] from-100% hover:from-0% rounded-full buttonBgTransition text-lg font-semibold inline-block transition-all duration-300 ease-in-out py-3 px-3">
          {props.children}
        </span>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
};

export { Button, buttonVariants };
