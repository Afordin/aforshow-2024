import { Countdown } from "./common/Countdown";
import { Button } from "./ui/button";

export const WelcomeHero = () => {
  return (
    <section className=" mx-auto max-w-6xl w-full h-full">
      
      <div className="relative z-20 flex flex-col gap-12 items-center text-center">
        <div className="flex flex-col ">
          <h2 className="text-caTextSecondary text-[24px]">
            El evento de programación del año
          </h2>
          <p className="text-6xl font-semibold">
            Da tu primera charla de programación y aporta valor a la comunidad
            en el{" "}
            <span className="inline-block bg-gradient-to-r from-caPrimary-500 to-caSecondary-500 text-transparent bg-clip-text">
              Aforshow
            </span>
          </p>
        </div>


        {/* Wrapper was moved to countdown because its component logic, could be override by className prop */}
        <Countdown startFrom={new Date("2024-08-30")} />

        <div className="flex gap-6">
          <Button size="xl">Inscribirse</Button>
          <Button variant="secondary" size="xl">
            Comunidad Sec
          </Button>
          <Button variant="twitch" size="xl">
            Comunidad
          </Button>
        </div>
      </div>
    </section>
  );
};
