import { Gift, Sparkles } from "lucide-react";

export default function Rewards({ points = 0, onReset }) {
  const level = Math.floor(points / 10) + 1;
  const next = 10 - (points % 10);

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Rewards</h2>
      <p className="text-blue-200/80 mb-6">Earn stars for calm choices</p>

      <div className="relative mx-auto mb-6 w-48 h-48">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-400 via-fuchsia-500 to-sky-500 animate-pulse opacity-80"></div>
        <div className="absolute inset-2 rounded-3xl bg-slate-900 flex items-center justify-center shadow-xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-amber-300 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Level {level}</span>
            </div>
            <div className="text-white text-5xl font-bold">{points}★</div>
            <div className="text-blue-200 text-sm mt-1">{next} to next level</div>
          </div>
        </div>
      </div>

      <button onClick={onReset} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold">
        <Gift className="w-5 h-5" /> Redeem & Reset
      </button>
    </div>
  );
}
