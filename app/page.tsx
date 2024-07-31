import CursorsContextProvider from "./cursors-context";
import { Contributors } from "./components/common/Contributors";
import { Divider } from "./components/common/Divider";
import { Schedule } from "./components/Schedule";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { TicketDownload } from "./components/TicketDownload";
import Hero from "./components/Hero";
import Cursors from "./cursors";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // when hosted in an iframe on the partykit website, don't render link to the site
  const room =
    typeof searchParams?.partyroom === "string"
      ? searchParams.partyroom
      : "aforshow-room";

  const host =
    typeof searchParams?.partyhost === "string"
      ? searchParams.partyhost
      : "aforshow-2024-party.jarrisondev.partykit.dev";

  return (
    <CursorsContextProvider room={room} host={host}>
      <main className="font-dmSans">
        <Cursors />
        <Hero />
        <section className="flex flex-col gap-[72px]">
          <Divider />
          <Schedule />
          <Divider />
          <TicketDownload />
          <FAQ />
          <Divider />
          <Contributors />
          <Footer />
        </section>
      </main>
    </CursorsContextProvider>
  );
}
