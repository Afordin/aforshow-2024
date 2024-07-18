import SharedSpace from "./shared-space";
import CursorsContextProvider from "./cursors-context";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // when hosted in an iframe on the partykit website, don't render link to the site
  const room =
    typeof searchParams?.partyroom === "string"
      ? searchParams.partyroom
      : "voronoi-room";

  const host =
    typeof searchParams?.partyhost === "string"
      ? searchParams.partyhost
      : "voronoi-party.genmon.partykit.dev";

  return (
    <main>
      <CursorsContextProvider room={room} host={host}>
        <SharedSpace />
      </CursorsContextProvider>
    </main>
  );
}
