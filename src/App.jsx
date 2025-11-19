import { useState } from 'react'
import Home from './components/Home'
import BuddyInteraction from './components/BuddyInteraction'
import EmotionCheckIn from './components/EmotionCheckIn'
import CalmingActivity from './components/CalmingActivity'
import TransitionCountdown from './components/TransitionCountdown'
import Rewards from './components/Rewards'

const steps = [
  'home',
  'buddy',
  'checkin',
  'calming',
  'countdown',
  'rewards',
]

function App() {
  const [step, setStep] = useState('home')
  const [points, setPoints] = useState(12)
  const [mood, setMood] = useState(null)

  const next = () => {
    const i = steps.indexOf(step)
    setStep(steps[(i + 1) % steps.length])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_110%,rgba(236,72,153,0.2),transparent_40%)]" />
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold">BuddyFocus</div>
        <div className="text-amber-300 font-semibold">{points}★</div>
      </header>

      <main className="relative z-10 px-6 pb-16">
        {step === 'home' && <Home onStart={next} points={points} />}
        {step === 'buddy' && <BuddyInteraction onNext={next} />}
        {step === 'checkin' && (
          <EmotionCheckIn
            onSelect={(m)=> setMood(m)}
            onNext={() => { setPoints(p=>p+2); next(); }}
          />
        )}
        {step === 'calming' && (
          <CalmingActivity onNext={() => { setPoints(p=>p+3); next(); }} />
        )}
        {step === 'countdown' && (
          <TransitionCountdown seconds={5} onEnd={next} />
        )}
        {step === 'rewards' && (
          <Rewards points={points} onReset={() => { setPoints(0); setStep('home') }} />
        )}
      </main>
    </div>
  )
}

export default App
