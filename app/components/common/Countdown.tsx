import { useEffect, useLayoutEffect, useState } from "react";
import { cn } from "../utils";
import { useTime } from "@/hooks/useTimezone";

interface CountDownProps {
  className?: string;
}

export const Countdown = ({ className }: CountDownProps) => {
  const time = [
    { key: "days", label: "Días" },
    { key: "hours", label: "Horas" },
    { key: "minutes", label: "Minutos" },
    { key: "seconds", label: "Segundos" },
  ];

  const startTime = useTime({ timestamp: 1726855200000});
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    // Establecer la fecha y hora de finalización (20 Septiembre 2024, 20:00 en UTC+2)
    const countdownDate =  new Date("2024-09-20T18:00:00Z"); // UTC+2 es dos horas menos que UTC

    const now = new Date();

    const timeDifference = countdownDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useLayoutEffect(() => {
    updateCountdown();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className={cn("mt-10 flex gap-6 md:gap-16", className)}>
        {time.map(({ key, label }, index) => (
          <section key={index} className="text-center text-shadow-sm">
            <span className="font-bold text-3xl xl:text-6xl">
              {formatNumber(timeLeft[key as keyof typeof timeLeft])}
            </span>
            <p className="text-lg xl:text-2xl">{label}</p>
          </section>
        ))}
      </div>
      <p className="font-semibold">20 de Septiembre de 2024 a las {startTime}</p>
    </div>
  );
};
