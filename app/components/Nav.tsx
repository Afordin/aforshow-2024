import Image from "next/image";
import { Button } from "./ui/button";

export const Nav = () => {
  return (
    <section className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-between">
      <a className="flex items-center gap-1">
        <Image src="/logo.png" alt="logo image" width={28} height={28}></Image>
        <h1 className="text-2xl text-white font-semibold">Aforshow</h1>
      </a>
      <Button>Inscribirse</Button>
    </section>
  );
};
