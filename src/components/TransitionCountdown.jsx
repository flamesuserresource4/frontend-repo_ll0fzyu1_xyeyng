import { useEffect, useState } from "react";

export default function TransitionCountdown({ seconds = 5, onEnd }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    setTime(seconds);
  }, [seconds]);

  useEffect(() => {
    if (time <= 0) {
      onEnd?.();
      return;
    }
    const id = setTimeout(() => setTime((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [time, onEnd]);

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Transition Time</h2>
      <p className="text-blue-200/80 mb-6">Get ready for the next activity</p>

      <div className="mx-auto w-40 h-40 rounded-2xl bg-slate-800/70 border border-white/5 flex items-center justify-center">
        <span className="text-5xl font-bold text-white">{time}</span>
      </div>
    </div>
  );
}
