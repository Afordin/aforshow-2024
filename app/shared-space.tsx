"use client";

import { useEffect, useState } from "react";

import { useCursors } from "./cursors-context";
import OtherCursor from "./other-cursor";
import SelfCursor from "./self-cursor";
import { WelcomeHero } from "./components/WelcomeHero";

import { Nav } from "./components/Nav";

export default function SharedSpace() {
  const { others, self } = useCursors();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const count = Object.keys(others).length + (self ? 1 : 0);

  return (
    <div className="flex flex-col gap-[72px] min-h-screen overflow-hidden pt-4">
      <div className="z-10 absolute pointer-events-none top-0 left-0 w-full h-full overflow-clip">
        {count > 0 && (
          <div className="absolute top-4 left-4 pointer-events-none flex items-center">
            <span className="text-2xl">{count}&times;</span>
            <span className="text-5xl">🐁</span>
          </div>
        )}
      </div>

      <div className="w-[300px] h-[300px] bg-caBlurBoxes absolute blur-[200px] left-[-100px] top-80"></div>
      <div className="w-[300px] h-[300px] bg-caBlurBoxes absolute blur-[200px] right-[-100px] top-20"></div>
      <div className="bg-pattern overflow-hidden relative gap-[74px] flex flex-col">
        <Nav />
        <WelcomeHero />

        {/* Add the others sections here, the patter will grow with that space */}
        {/* Evento sponsorizado gracias a */}
      </div>

      {Object.keys(others).map((id) => (
        <div key={id}>
          <OtherCursor
            id={id}
            windowDimensions={windowDimensions}
            fill="#06f"
          />
        </div>
      ))}
      {self?.pointer === "touch" && (
        <SelfCursor windowDimensions={windowDimensions} />
      )}
    </div>
  );
}
