import { Sparkle } from "lucide-react";
import { useState } from "react";

export default function BuddyInteraction({ onNext }) {
  const [mood, setMood] = useState("happy");

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Say hi to your Buddy</h2>
      <p className="text-blue-200/80 mb-6">Tap to interact and change their mood</p>

      <div className="relative mx-auto mb-6 w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400 animate-pulse opacity-80"></div>
        <div
          className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center shadow-xl cursor-pointer select-none"
          onClick={() => setMood(mood === "happy" ? "calm" : "happy")}
        >
          <BuddyFace mood={mood} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-blue-200/90 mb-6">
        <Sparkle className="w-4 h-4" />
        <span>Your buddy mirrors your feelings</span>
      </div>

      <button
        onClick={onNext}
        className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-500/20 transition"
      >
        Continue
      </button>
    </div>
  );
}

function BuddyFace({ mood = "happy" }) {
  const eye = "fill-white";
  const mouth = mood === "happy" ? (
    <path d="M18 32c5 5 15 5 20 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  ) : (
    <path d="M18 36c5-5 15-5 20 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  );
  return (
    <svg viewBox="0 0 56 56" className="w-28 h-28">
      <circle cx="28" cy="28" r="26" fill="#0f172a" stroke="#334155" />
      <circle cx="20" cy="22" r="4" className={eye} />
      <circle cx="36" cy="22" r="4" className={eye} />
      {mouth}
    </svg>
  );
}
