"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useCursors } from "app/cursors-context";
import { Button } from "./ui/button";
import Logo from "app/components/icons/Logo";
import { cn } from "./utils";
import { useUserStore } from "@/store/useUserStore";
import { useAuth } from "@/hooks/useAuth";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Link } from "./common/Link";

export const Nav = () => {
  const router = useRouter();
  const { cursors, disabled, setDisabled } = useCursors();
  const { signInWithDiscord, signOut } = useAuth();
  const user = useUserStore((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 bg-slate-900/20 backdrop-blur-sm flex justify-center items-center h-16 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex w-full max-w-6xl mx-auto justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-1 cursor-pointer">
          <Logo />
          <h1 className="text-xl md:text-2xl text-white font-semibold transition-all duration-300">
            Aforshow
          </h1>
        </a>
        <div className="hidden md:flex items-center gap-5 h-full">
          <div
            className={cn(
              "group flex -space-x-3 hover:cursor-pointer  p-2 transition-opacity duration-300",
              { "opacity-70": disabled }
            )}
            onClick={() => {
              if (setDisabled) setDisabled((prev) => !prev);
            }}
          >
            {cursorsSlice.map((cursor, index) => (
              <div
                key={cursor.id}
                className={`${imgCircleClass} transition-transform duration-300 hover:scale-110`}
                style={{ transform: `translateX(${index * 5}px)` }}
              >
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
                  "flex items-center justify-center bg-[#121112] transition-transform duration-300 hover:scale-110"
                )}
                style={{ transform: `translateX(${slice * 5}px)` }}
              >
                <span className="text-white font-semibold">
                  +{cursors.length - slice}
                </span>
              </div>
            )}
          </div>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-tddK0-eUZODZr8ErbFHkthVZdzQTyI-xDPRRFsZN76NGzw/viewform"
            className="transition-all duration-300 hover:scale-105"
          >
            Votar charlas
          </Link>
          {user ? (
            <div ref={trigger}>
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Image
                  src={user?.avatar_url}
                  alt="user avatar image"
                  width={40}
                  height={40}
                  className="relative rounded-full border-2 border-caSecondary-500 hover:scale-105 cursor-pointer transition-all duration-300"
                />
              </button>
              {isOpen && (
                <div
                  ref={modalRef}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-900 ring-1 ring-black ring-opacity-5 transition-all duration-300"
                >
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 w-full text-left transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                router.push("/");
                signInWithDiscord("/#ticket");
              }}
              className="transition-all duration-300 hover:scale-105"
            >
              Obtén tu ticket
            </Button>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-300 hover:bg-slate-800"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-slate-900 p-4 md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSc-tddK0-eUZODZr8ErbFHkthVZdzQTyI-xDPRRFsZN76NGzw/viewform"
          className="transition-all duration-300 hover:scale-105"
        >
          Votar charlas
        </Link>
        {user ? (
          <Button
            variant="secondary"
            className="w-full transition-all duration-300 hover:scale-105"
            onClick={() => {
              signOut();
              setMobileMenuOpen(false);
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="w-full transition-all duration-300 hover:scale-105"
            onClick={() => {
              router.push("/");
              signInWithDiscord();
              setMobileMenuOpen(false);
            }}
          >
            Log In con Discord
          </Button>
        )}
      </div>
    </nav>
  );
};
