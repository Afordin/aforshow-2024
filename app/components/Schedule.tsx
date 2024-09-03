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
          hour="por definir"
          img="/imgs/speakers/speaker-1.png"
          alt="speaker 1 image: serudda"
        />
        {/* <Talk
          title="Mi Experiencia como Desarrollador Junior en Latinoamérica: ¿Un Viaje hacia el Éxito?"
          author="Edgar Mejia Vásquez"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="El camino menos transitado: Cómo llegué al sector IT a los 35 añazos"
          author="David Rodríguez - Xerosec"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="Magical girls UI: los secretos de la animación en Figma"
          author="Anaís Fernández Vilar"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
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
