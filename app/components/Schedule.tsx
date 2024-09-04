import { Talk } from "./common/Talk";

export const Schedule = () => {
  return (
    <section className="w-full mx-auto max-w-sm md:max-w-6xl">
      <h2 className="text-center font-semibold text-[56px] text-hero mb-20">
        Horarios y charlas
      </h2>
      <div className="flex flex-col gap-16">
        <Talk
          title="Top Tips para Deslumbrar en una Entrevista"
          author="Serudda"
          hour="xx.00h"
          img="/imgs/speakers/speaker-1.png"
          alt="speaker 1 image: serudda"
        />
        <Talk
          title="Primeros 6 Meses trabajando como Desarrolladora: Lecciones que No Esperaba"
          author="Kao Lo"
          hour="xx.00h"
          img="/imgs/speakers/speaker-3.jpg"
          alt="speaker 3 image: Kao Lo"
        />
        <Talk
          title="Construye tu primer LLM agente con python paso a paso"
          author="Moises Ariza"
          hour="xx.00h"
          img="/imgs/speakers/speaker-2.jpg"
          alt="speaker 2 image: Moises Ariza"
        />
        {/* <Talk
          title="Easy Docker: Dockeriza tu Frontend y Deja Atrás a la Competencia"
          author="Kevin Santiago Rey Rodriguez"
          hour="xx.00h"
          img="/imgs/ikurotime.png"
          alt="speaker 4 image: Kevin Santiago Rey Rodriguez"
        /> */}
        {/* <Talk
          title="Sobrevivir al Código - Guía para programadores impacientes"
          author="David Huertas - Ikurotime"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        /> */}
      </div>
    </section>
  );
};
