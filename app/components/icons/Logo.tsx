import * as React from "react";
import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="29"
    id="logo"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 0.5C14 8.23144 7.73201 14.5 0 14.5C7.73201 14.5 14 20.7686 14 28.5C14 20.7686 20.268 14.5 28 14.5C20.268 14.5 14 8.23144 14 0.5Z"
      fill="url(#paint0_linear_3850_1986)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3850_1986"
        x1="0"
        y1="0.5"
        x2="28"
        y2="28.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC1C37" />
        <stop offset="1" stopColor="#AD40E1" />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;
