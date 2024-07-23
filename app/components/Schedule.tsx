import { Talk } from "./common/Talk";

export const Schedule = () => {
  return (
    <section className="w-full mx-auto max-w-6xl">
      <h2 className="text-center font-semibold text-[56px]">
        Horarios y charlas
      </h2>
      <div className="flex flex-col gap-8">
        <Talk
          title="De Junior a Líder"
          author="José Manuel Ortega Falcón"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="De Junior a Líder"
          author="José Manuel Ortega Falcón"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="De Junior a Líder"
          author="José Manuel Ortega Falcón"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="De Junior a Líder"
          author="José Manuel Ortega Falcón"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
        <Talk
          title="De Junior a Líder"
          author="José Manuel Ortega Falcón"
          hour="20.00h"
          img="/imgs/ikurotime.png"
          alt="contributor 1"
        />
      </div>
    </section>
  );
};
