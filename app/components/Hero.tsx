"use client";

import React from "react";
import { Nav } from "./Nav";
import { WelcomeHero } from "./WelcomeHero";
import { Sponsors } from "./Sponsors";

export default function Hero() {
  return (
    <div className="flex mb-32 flex-col gap-[72px]">
      <div className="bg-caBlurBoxes absolute left-[-100px] top-80 h-[200px] w-[200px] blur-[200px] sm:h-[300px] sm:w-[300px]"></div>
      <div className="bg-pattern relative flex w-full flex-col gap-[74px] overflow-hidden">
        <div className="w-full absolute -bottom-20 h-[200px]"></div>
        <div className="bg-caBlurBoxes absolute right-[-100px] top-20 h-[400px] w-[200px] blur-[200px] sm:h-[300px] sm:w-[300px]"></div>
        <Nav />
        <WelcomeHero variant="home" />
        <Sponsors />
      </div>
    </div>
  );
}
