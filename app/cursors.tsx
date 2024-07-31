"use client";

import { useEffect, useState } from "react";
import { useCursors } from "./cursors-context";
import OtherCursor from "./other-cursor";

export default function Cursors() {
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


  // get the last 30 cursors
  const cursors = Object.keys(others).slice(-30);
  const count = Object.keys(others).length + (self ? 1 : 0);
  

  return (
    <div className="absolute h-full w-full pointer-events-none overflow-hidden">
      <div className="hidden z-10 sm:absolute pointer-events-none top-0 left-0 w-full h-full overflow-clip">
        {count > 0 && (
          <div className="absolute z-10 top-4 left-4 pointer-events-none flex items-center">
            <span className="text-2xl">{count}&times;</span>
            <span className="text-5xl">🐁</span>
          </div>
        )}
      </div>

      {cursors.map((id) => (
          <OtherCursor
            id={id}
            key={id}
            windowDimensions={windowDimensions}
          />
      ))}
    </div>
  );
}
