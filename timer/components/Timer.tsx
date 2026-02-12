
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center border border-white/10 rounded-xl px-2 py-2 md:px-6 md:py-4 bg-white/5 backdrop-blur-sm min-w-[70px] sm:min-w-[80px] md:min-w-[140px] justify-center transition-all duration-300">
      <span className="text-xl md:text-3xl font-bold text-white leading-none mb-1 md:mb-2">{value.toString().padStart(2, '0')}</span>
      <span className="text-[9px] md:text-xs text-indigo-400 uppercase tracking-tight md:tracking-widest font-medium">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-row items-center justify-center space-x-1 sm:space-x-2 md:space-x-6">
      <TimeBlock value={timeLeft.days} label="Days" />
      <span className="text-lg md:text-2xl text-white/30 font-light mb-4 md:mb-6">:</span>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <span className="text-lg md:text-2xl text-white/30 font-light mb-4 md:mb-6">:</span>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <span className="text-lg md:text-2xl text-white/30 font-light mb-4 md:mb-6">:</span>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
