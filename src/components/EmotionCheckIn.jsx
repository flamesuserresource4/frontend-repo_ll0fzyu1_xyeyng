import { useState } from "react";

const moods = [
  { key: "happy", label: "Happy", color: "bg-yellow-400" },
  { key: "calm", label: "Calm", color: "bg-emerald-400" },
  { key: "sad", label: "Sad", color: "bg-sky-400" },
  { key: "anxious", label: "Anxious", color: "bg-fuchsia-400" },
  { key: "angry", label: "Angry", color: "bg-red-400" },
];

export default function EmotionCheckIn({ onNext, onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">How are you feeling?</h2>
      <p className="text-blue-200/80 mb-6">Pick the emotion that matches you right now</p>

      <div className="grid grid-cols-5 gap-3 mb-6">
        {moods.map((m) => (
          <button
            key={m.key}
            onClick={() => setSelected(m.key)}
            className={`aspect-square rounded-xl ${m.color} bg-opacity-90 hover:bg-opacity-100 transition ring-2 ${selected===m.key?"ring-white":"ring-transparent"}`}
            aria-label={m.label}
          />
        ))}
      </div>

      <button
        onClick={() => { if(selected){ onSelect?.(selected); onNext(); }}}
        className="w-full px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={!selected}
      >
        Continue
      </button>
    </div>
  );
}
