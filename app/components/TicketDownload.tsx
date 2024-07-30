import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import X from "public/icons/X";

export const TicketDownload = () => {
  return (
    <section className="w-full max-w-6xl items-center mx-auto flex flex-col">
      <p className="text-2xl font-semibold">
        Descarga tu ticket y compártelo en redes sociales
      </p>
      <Image
        src="/imgs/ticket.png"
        alt="aforshow ticket for user"
        width={817}
        height={316}
      />
      <div className="flex gap-6 pb-12">
        <Button size="xl" className="flex gap-x-2">
          <X className="size-4 ml-2" />
          Compartir
        </Button>

        <Button variant="secondary" className="flex gap-x-2" size="xl">
          <ArrowDown className="size-5" />
          Descargar ticket
        </Button>
      </div>
    </section>
  );
};
