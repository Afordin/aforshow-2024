"use client";

import { useEffect, useState } from "react";
import { useCursors } from "./cursors-context";
import OtherCursor from "./other-cursor";

export default function Cursors() {
  const { cursors, disabled } = useCursors();
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

  const cursorsSliced = disabled ? [] : cursors.slice(-10);

  return (
    <div className="absolute h-full w-full pointer-events-none overflow-hidden">
      {cursorsSliced.map((cursor) => (
        <OtherCursor
          key={cursor.id}
          cursor={cursor}
          windowDimensions={windowDimensions}
        />
      ))}
    </div>
  );
}
