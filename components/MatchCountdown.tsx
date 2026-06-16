'use client'

import { useState, useEffect } from 'react'
import { matches } from '@/lib/data'

export default function MatchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const openingMatch = new Date('2026-06-11T18:00:00')

    const timer = setInterval(() => {
      const now = new Date()
      const diff = openingMatch.getTime() - now.getTime()

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">⏱️ Countdown to World Cup 2026</h2>

        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 md:p-6 min-w-[80px]">
            <p className="text-4xl md:text-5xl font-bold">{timeLeft.days}</p>
            <p className="text-sm text-blue-200 mt-2">Days</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 md:p-6 min-w-[80px]">
            <p className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</p>
            <p className="text-sm text-blue-200 mt-2">Hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 md:p-6 min-w-[80px]">
            <p className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</p>
            <p className="text-sm text-blue-200 mt-2">Minutes</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 md:p-6 min-w-[80px]">
            <p className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</p>
            <p className="text-sm text-blue-200 mt-2">Seconds</p>
          </div>
        </div>

        <p className="text-blue-200 mb-4">
          🏆 Opening Match: Mexico vs Argentina
        </p>
        <p className="text-sm text-blue-300">
          June 11, 2026 | Estadio Azteca, Mexico City
        </p>
      </div>
    </div>
  )
}
