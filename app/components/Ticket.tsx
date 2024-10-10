/* eslint-disable @next/next/no-img-element */
import "atropos/css";
import { Atropos } from "atropos/react";
import { forwardRef } from "react";

interface TicketProps {
  avatar?: string;
  name?: string;
  number?: number;
}

export const sponsors = [
  {
    name: "Afordin",
    logo: "/imgs/ticket/sponsor_1.webp",
  },
];
export const Ticket = forwardRef<HTMLDivElement, TicketProps>(function Ticket(
  { name = "tpicj aforcita", number = 1, avatar = "/imgs/ticket/avatar.png" },
  ref
) {
  return (
    <div className="flex justify-center md:w-full mx-auto mt-5 p-2 md:p-0">
      <Atropos
        shadowScale={1.1}
        innerClassName="rounded-2xl"
        className="w-[60%] lg:w-full h-[30%] max-h-[210px] max-w-[700px] bg-transparent mx-auto rounded-2xl shadow-[0_0px_90px_-10px_#c138b830] hover:shadow-none"
      >
        <div
          className="ticket-bg w-full flex h-full rounded-2xl border-2 border-[#171717]"
          ref={ref}
        >
          <div className="flex flex-col col-span-6 justify-between p-4 sm:p-[30px] sm:pb-[17px] w-full rounded-2xl bg-cBlack rounded-tr-0 rounded-rb-0">
            <div className="flex gap-5 items-center">
              <img
                data-atropos-offset="2"
                className="w-8 lg:w-16 sm:w-28 overflow-hidden aspect-square rounded-full p-[0.1rem] bg-gradient-to-rb from-caPrimary-600 to-caSecondary-500"
                src={avatar}
                id="avatar"
                alt={`Avatar de ${name}`}
              />
              <div className="pr-[20px] flex flex-col gap-3 justify-center">
                <h3
                  title={name}
                  data-atropos-offset="3"
                  className={`flex font-bold text-lg sm:text-3xl md:${
                    name.length > 15 ? "text-2xl" : "text-4xl"
                  }`}
                >
                  {name}
                </h3>
                <span
                  data-atropos-offset="4"
                  className={`flex gap-1 items-center`}
                >
                  <span className="i-bi-twitch text-xl" />
                  <p className="font-bold text-[0.7rem] md:text-lg">
                    twitch.tv/afor_digital
                  </p>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div data-atropos-offset="3" className="flex  items-end gap-4">
                <p className="flex flex-col items-center text-xs sm:text-[28px] leading-tight">
                  <span className="font-100">SEPT</span>
                  <span className="font-bold">20</span>
                </p>
                <div>
                  <div className="flex">
                    {sponsors.map((sponsor) => (
                      <img
                        key={sponsor.name}
                        className="w-7 sm:w-14 aspect-square rounded-full"
                        src={sponsor.logo}
                        alt={`Logo de ${sponsor.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p
                data-atropos-offset="8"
                className="text-xs sm:text-[28px] leading-none"
              >
                #{number.toString().padStart(5, "0")}
              </p>
            </div>
          </div>

          <div className="w-80 sm:w-80 h-full flex items-center justify-center bg-gradient-to-rb from-caPrimary-600 to-caSecondary-500 rounded-2xl rounded-s-none">
            <img
              data-atropos-offset="5"
              className="w-full invert"
              src="/imgs/ticket/aforshow.png"
              alt="Hackafor 2024 Announcement Logo"
            />
          </div>
        </div>
      </Atropos>
    </div>
  );
});
