import { useTimezone } from "@/hooks/useTimezone";
import { Talk } from "./common/Talk";
import { Tag } from "./common/Tag";
import { Table } from "./common/Table";

export const Schedule = () => {
  const timezone = useTimezone();
  return (
    <section className="w-full mx-auto max-w-sm md:max-w-6xl">
      <h2 className="text-center font-semibold text-[56px] text-hero ">
        Horarios y charlas
      </h2>
      <span className="flex justify-center my-12 text-sm">
        <Tag>
          Zona horaria: <span className="font-semibold">{timezone}</span>
        </Tag>
      </span>
      <div className="flex flex-col gap-16">
        <Talk
          title="Construye tu primer LLM agente con python paso a paso"
          author="Moises Ariza"
          timestamp={1726855200000}
          img="/imgs/speakers/speaker-2.jpg"
          alt="speaker 2 image: Moises Ariza"
        />
        <Talk
          title="Easy Docker: Dockeriza tu Frontend y Deja Atrás a la Competencia"
          author="Santiago/@ksreyr"
          timestamp={1726857000000}
          img="/imgs/speakers/speaker-4.jpeg"
          alt="speaker 4 image: Kevin Santiago Rey Rodriguez"
        />
        <Table
          title="Experiencias surrealistas en el trabajo"
          authors="Rothio Tomé · Carmen Ansio · Irene Morgado"
          timestamp={1726858800000}
        />
        <Talk
          title="Mindset de Crecimiento para Programadores: Supera el Síndrome del Impostor y Aumenta tu Productividad"
          author="Karol Neiza"
          timestamp={1726860600000}
          img="/imgs/speakers/speaker-5.png"
          alt="speaker 5 image: Karol Neiza"
        />
        <Talk
          title="Primeros 6 Meses trabajando como Desarrolladora: Lecciones que No Esperaba"
          author="Kao Lo"
          timestamp={1726862400000}
          img="/imgs/speakers/speaker-3.jpg"
          alt="speaker 3 image: Kao Lo"
        />
        <Table
          title="El futuro del desarrollo frontend"
          authors="Girlazo · IkuroTime · odraciRdev"
          timestamp={1726864200000}
        />
        <Talk
          title="Top Tips para Deslumbrar en una Entrevista"
          author="Serudda"
          timestamp={1726866000000}
          img="/imgs/speakers/speaker-1.png"
          alt="speaker 1 image: serudda"
        />
      </div>
    </section>
  );
};
