import Image from "next/image";
import { Button } from "./ui/button";

/* Should be fixed nav? */

export const Nav = () => {
  return (
    <nav className="relative px-2 w-full max-w-6xl h-16 mx-auto flex items-center justify-between">
      <a href="/" className="flex items-center gap-1 cursor-pointer">
        <Image src="/logo.png" alt="logo image" width={28} height={28}></Image>
        <h1 className="text-2xl text-white font-semibold">Aforshow</h1>
      </a>
      <Button>Inscribirse</Button>
    </nav>
  );
};
