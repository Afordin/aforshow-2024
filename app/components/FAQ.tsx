export const FAQ = () => {
  return (
    <section>
      <h1 className="mb-[4.5rem] text-center text-white text-[3.5rem] font-semibold">
        Preguntas frecuentes
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 md:w-3/5 m-auto">
        <details className="w-full group">
          <summary className="font-bold text-[1.75rem] text-white list-none cursor-pointer relative flex items-center justify-between">
            ¿Donde puedo ver el evento?
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition group-open:rotate-90"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </summary>
          <p className="text-xl font-semibold text-white">
            El evento será totalmente gratuito y realizará en{" "}
            <a className="underline" href="https://www.twitch.tv/afor_digital">
              twitch.tv/afor_digital
            </a>
          </p>
        </details>
        <details className="w-full group">
          <summary className="font-bold text-[1.75rem] text-white list-none cursor-pointer relative flex items-center justify-between">
            ¿Donde puedo ver el evento?
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition group-open:rotate-90"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </summary>
          <p className="text-xl font-semibold text-white">
            El evento será totalmente gratuito y realizará en{" "}
            <a className="underline" href="https://www.twitch.tv/afor_digital">
              twitch.tv/afor_digital
            </a>
          </p>
        </details>
      </div>
    </section>
  );
};
