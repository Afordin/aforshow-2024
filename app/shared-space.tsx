"use client";

import { useEffect, useState } from "react";

import { useCursors } from "./cursors-context";
import OtherCursor from "./other-cursor";
import SelfCursor from "./self-cursor";
import { Header } from "./components/Header";
import { Button } from "@/components/ui/button";

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
    // Add the class 'overflow-hidden' on body to prevent scrolling
    document.body.classList.add("overflow-hidden");
    // Scroll to top
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const count = Object.keys(others).length + (self ? 1 : 0);

  return (
    <div>
      <div className="-z-10 absolute top-0 left-0 w-full h-full overflow-clip">
        {count > 0 && (
          <div className="absolute top-4 left-4 pointer-events-none flex items-center">
            <span className="text-2xl text-white">{count}&times;</span>
            <span className="text-5xl">🐁</span>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto w-full min-h-screen">
        <Header />
        <Button>Accede con Discord</Button>
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
