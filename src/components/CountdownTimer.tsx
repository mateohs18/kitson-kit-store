import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg px-6 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-accent">
        <div className="text-center">
          <div className="text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="text-xs">días</div>
        </div>
        <div className="text-xl">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs">horas</div>
        </div>
        <div className="text-xl">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs">min</div>
        </div>
        <div className="text-xl">:</div>
        <div className="text-center">
          <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs">seg</div>
        </div>
      </div>
    </div>
  );
};