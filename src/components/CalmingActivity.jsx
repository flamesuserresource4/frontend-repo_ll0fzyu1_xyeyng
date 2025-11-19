import { useEffect, useRef, useState } from "react";

export default function CalmingActivity({ onNext }) {
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(4);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current && clearInterval(intervalRef.current);
    setCount(4);
    intervalRef.current = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          setPhase((p) => (p === "inhale" ? "hold" : p === "hold" ? "exhale" : "inhale"));
          return 4;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [phase]);

  const label = phase === "inhale" ? "Inhale" : phase === "hold" ? "Hold" : "Exhale";

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Breathing Bubble</h2>
      <p className="text-blue-200/80 mb-6">Follow the bubble and breathe with it</p>

      <div className="mx-auto mb-6 w-56 h-56 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 p-1">
        <div
          className={`w-full h-full rounded-full bg-slate-900 flex items-center justify-center transition-transform duration-700 ${
            phase === "inhale" ? "scale-100" : phase === "hold" ? "scale-90" : "scale-75"
          }`}
        >
          <div className="text-center">
            <div className="text-white text-4xl font-bold leading-none">{count}</div>
            <div className="text-blue-200">{label}</div>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold"
      >
        I'm Calm Now
      </button>
    </div>
  );
}
