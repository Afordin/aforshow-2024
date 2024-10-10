import { Summary } from "./common/Summary";

const questions = [
  {
    title: "¿Donde puedo ver el evento?",
    description: (
      <p className="text-xl font-semibold text-white">
        El evento será totalmente gratuito y realizará en{" "}
        <a className="underline" href="https://www.twitch.tv/afor_digital">
          twitch.tv/afor_digital
        </a>
      </p>
    ),
  },
  {
    title: "¿Tengo que estar suscrito al canal para verlo?",
    description: (
      <p className="text-xl font-semibold text-white">
        No, es totalmente gratuito. Pero si quieres dejar tu prime nadie te dirá
        nada.
      </p>
    ),
  },
  {
    title: "¿Puedo presentar mi charla?",
    description: (
      <p className="text-xl font-semibold text-white">
        Las inscripciones ya están cerradas, puedes ver las charlas
        seleccionadas en el apartado de horarios.
      </p>
    ),
  },
  {
    title: "¿Se podrán ver las charlas más tarde?",
    description: (
      <p className="text-xl font-semibold text-white">
        Sí, todas las charlas se podrán ver más tarde en{" "}
        <a className="underline" href="https://www.youtube.com/@afor_lives">
          afor lives
        </a>
      </p>
    ),
  },
];

export const FAQ = () => {
  return (
    <section>
      <h2 className="mb-[4.5rem] text-center text-white text-5xl md:text-[3.5rem] font-semibold">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 md:w-3/5 m-auto">
        {questions.map((question, index) => (
          <Summary title={question.title} key={index}>
            {question.description}
          </Summary>
        ))}
      </div>
    </section>
  );
};
