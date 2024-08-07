"use client";
/* eslint-disable @next/next/no-img-element */
import { useCursors } from "app/cursors-context";
import { Button } from "./ui/button";
import Logo from "app/components/icons/Logo";
import { cn } from "./utils";
import { useUserStore } from "@/store/useUserStore";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Nav = () => {
  const router = useRouter();
  const { cursors, disabled, setDisabled } = useCursors();
  const { signInWithDiscord, signOut } = useAuth();
  const user = useUserStore((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const trigger = useOnClickOutside<HTMLDivElement>(
    modalRef,
    ({ isSameTrigger }) => setIsOpen(isSameTrigger)
  );

  const slice = 3;
  const cursorsSlice = cursors.slice(-slice);

  const imgCircleClass = cn(
    "relative rounded-full h-8 w-8 ring-2 ring-white overflow-hidden group-hover:ring-[3px]"
  );

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-30 bg-slate-900/20 backdrop-blur-sm flex justify-center items-center h-16 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex w-full max-w-6xl mx-auto justify-between">
        <a href="/" className="flex items-center gap-1 cursor-pointer">
          <Logo />
          <h1 className="text-2xl text-white font-semibold">Aforshow</h1>
        </a>
        <div className="flex items-center gap-5 h-full">
          <div
            className={cn(
              "group flex -space-x-3 hover:cursor-pointer overflow-hidden p-2",
              { "opacity-70": disabled }
            )}
            onClick={() => {
              if (setDisabled) setDisabled((prev) => !prev);
            }}
          >
            {cursorsSlice.map((cursor) => (
              <div key={cursor.id} className={imgCircleClass}>
                <Image
                  width={20}
                  height={20}
                  className="scale-[1.7] w-full h-full absolute top-0 left-0"
                  src={cursor.flagUrl}
                  alt="Flag cursor depending on user country"
                />
              </div>
            ))}
            {cursors.length > slice && (
              <div
                className={cn(
                  imgCircleClass,
                  "flex items-center justify-center bg-[#121112]"
                )}
              >
                <span className="text-white font-semibold">
                  +{cursors.length - slice}
                </span>
              </div>
            )}
          </div>
          <Button>Inscribirse</Button>
          {user ? (
            <div ref={trigger}>
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Image
                  src={user?.user_metadata.avatar_url}
                  alt="user avatar image"
                  width={40}
                  height={40}
                  className="relative rounded-full border-2 border-caSecondary-500 hover:scale-105 cursor-pointer"
                />
              </button>
              {isOpen && (
                <div ref={modalRef}>
                  <div className="bg-slate-900 absolute border-1 border-slate-700 -z-1 px-8 py-3 rounded-md">
                    <button
                      onClick={() => {
                        signOut();
                      }}
                      className="w-full text-slate-300 font-semibold hover:text-white whitespace-nowrap rounded-sm"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                router.push("/");
                signInWithDiscord();
              }}
            >
              Log In con Discord
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
