import { Smile, Play, Star } from "lucide-react";

export default function Home({ onStart, points }) {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="relative mx-auto mb-6 w-40 h-40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 animate-pulse opacity-80"></div>
          <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center shadow-xl">
            <BuddyFace mood="happy" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">BuddyFocus</h1>
        <p className="text-blue-200/80 mb-6">Your friendly focus companion</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <InfoCard icon={<Smile className="w-5 h-5" />} label="Check-in" />
          <InfoCard icon={<Play className="w-5 h-5" />} label="Calming" />
          <InfoCard icon={<Star className="w-5 h-5" />} label={`Rewards (${points})`} />
        </div>

        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 transition"
        >
          <Play className="w-5 h-5" /> Start
        </button>
      </div>
    </div>
  );
}

function InfoCard({ icon, label }) {
  return (
    <div className="bg-slate-800/60 border border-white/5 rounded-xl p-3 text-blue-200 flex flex-col items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-slate-700/60 flex items-center justify-center text-white/90">
        {icon}
      </div>
      <div className="text-xs">{label}</div>
    </div>
  );
}

function BuddyFace({ mood = "happy" }) {
  const eye = "fill-white";
  const mouth = mood === "happy" ? (
    <path d="M20 28c4 4 12 4 16 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  ) : (
    <path d="M20 32c4-4 12-4 16 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  );
  return (
    <svg viewBox="0 0 56 56" className="w-24 h-24">
      <circle cx="28" cy="28" r="26" fill="#0f172a" stroke="#334155" />
      <circle cx="20" cy="22" r="4" className={eye} />
      <circle cx="36" cy="22" r="4" className={eye} />
      {mouth}
    </svg>
  );
}
