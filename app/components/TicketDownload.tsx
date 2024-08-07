import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { X } from "@/components/logos";
import { useUserStore } from "@/store/useUserStore";
import { Ticket } from "./Ticket";
import { useRef } from "react";
import { toPng } from 'html-to-image';
import { useAuth } from "@/hooks/useAuth";
import { uploadTicket } from "./utils/uploadTicket";


export const TicketDownload = () => {
  const { signInWithDiscord } = useAuth();
  const user = useUserStore((state) => state.user);
  const ticketRef = useRef<HTMLDivElement>(null);


  const downloadTicket = async () => {
    if (ticketRef.current) {
      try {
        const dataUrl = await toPng(ticketRef.current);

        if (!dataUrl) {
          console.error('Could not capture image');
          return;
        }

        const link = document.createElement('a');
        link.download = 'hackafor-ticket.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Could not capture image:', error);
      }
    }
  };

  const shareTwitter = async () => {
    if (!user || !ticketRef.current) return;

    await uploadTicket(user.id, ticketRef.current);

    const urlstring = process.env.NEXT_PUBLIC_URL || 'https://aforshow-2024.vercel.app';
    const url = `${urlstring}/${user.id}/`;
    
    const message = 'Este es tu ticket exclusivo para el Aforshow, habrá charlas, premios y sorteos. ¡Te esperamos! 🚀🎉';
    const hashtags = ['aforshow'];

    const encodedText = encodeURIComponent(message);
    const encodedUrl = encodeURIComponent(url);
    const hashtagsEncoded = encodeURIComponent(hashtags.join(','));

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&hashtags=${hashtagsEncoded}`;

    window.open(twitterUrl, '_blank');

  }

  return (
    <section id="ticket" className="w-full min-h-[600px] max-w-6xl items-center mx-auto flex gap-12 flex-col py-7">
      <p className="text-3xl font-semibold">
        Descarga tu ticket y compártelo en redes sociales
      </p>
      {user && (
        <>
          <Ticket ref={ticketRef} name={user?.name} avatar={user?.avatar_url} number={user?.count} />
          <div className="flex justify-center gap-x-5">
            <Button size="xl" className="flex gap-x-2"
              onClick={shareTwitter}>
              <X className="size-4 ml-2" />
              Compartir
            </Button>

            <Button variant="secondary" className="flex gap-x-2" size="xl"
              onClick={downloadTicket}>
              <ArrowDown className="size-5" />
              Descargar ticket
            </Button>
          </div>
        </>

      )}

      {user === undefined && (
        <div className="blur-sm opacity-65 pointer-events-none">
          <Ticket />
        </div>
      )}

      {user === null && (
        <>
          <div className="flex justify-center items-center">
            <div className="blur-sm opacity-65 pointer-events-none">
              <Ticket />
            </div>
            <Button
              className="absolute"
              variant="default"
              onClick={() => {
                signInWithDiscord('/#ticket');
              }}
            >
              Obtén tu ticket
            </Button>
          </div>
        </>
      )}
    </section>
  );
};
