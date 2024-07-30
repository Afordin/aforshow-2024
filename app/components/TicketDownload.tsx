import Image from "next/image";

export const TicketDownload = () => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col">
      <p>Descarga tu ticket y compártelo en redes sociales</p>
      <Image
        src="/imgs/ticket.png"
        alt="aforshow ticket for user"
        width={817}
        height={316}
      />
    </section>
  );
};
