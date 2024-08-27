"use client";
import CursorsContextProvider from "./cursors-context";
import { Contributors } from "./components/common/Contributors";
import { Divider } from "./components/common/Divider";
import { Schedule } from "./components/Schedule";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { TicketDownload } from "./components/TicketDownload";
import Hero from "./components/Hero";
import Cursors from "./cursors";
import { useEffect } from "react";
import { apiClient } from "./utils/supabase/client";
import { useUserStore } from "./store/useUserStore";

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

  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    apiClient.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        setUser(null);
        return;
      }
      const id = session.user.id;
      apiClient
        .from("profiles")
        .select("*")
        .eq("id", id)
        .then(({ data }) => {
          if (data?.[0]) setUser(data[0]);
        });
    });
  }, [setUser]);

  return (
    <CursorsContextProvider room={room} host={host}>
      <main className="font-dmSans">
        <Cursors />
        <Hero />
        <section className="flex flex-col gap-[72px]">
          <Divider />
          {/* <Schedule /> */}
          {/* <Divider /> */}
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
