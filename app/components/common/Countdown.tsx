import { useEffect, useLayoutEffect, useState } from "react";
import { cn } from "../utils";

interface CountDownProps {
  className?: string;
  startFrom?: Date;
}

export const Countdown = ({ className, startFrom }: CountDownProps) => {
  const time = [
    {
      key: "days",
      label: "Días",
    },
    {
      key: "hours",
      label: "Horas",
    },
    {
      key: "minutes",
      label: "Minutos",
    },
    {
      key: "seconds",
      label: "Segundos",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    const countdownDate = startFrom || new Date();
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
    setInterval(() => {
      updateCountdown();
    }, 1000);
  }, []);

  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  /* gap-16 =  64px */
  /* Use cn to override the wraper if need it */

  return (
    <div className={cn("flex gap-6 md:gap-16", className)}>
      {time.map(({ key, label }, index) => (
        <section key={index} className="text-center text-shadow-sm">
          <span className="font-bold text-3xl xl:text-6xl">
            {formatNumber(timeLeft[key])}
          </span>
          <p className="text-lg xl:text-2xl">{label}</p>
        </section>
      ))}
    </div>
  );
};
