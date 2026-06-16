'use client'

import { useState } from 'react'
import { Match } from '@/types'

interface MatchReminderProps {
  match: Match
}

export default function MatchReminder({ match }: MatchReminderProps) {
  const [reminders, setReminders] = useState<Record<string, boolean>>({})
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const isSubscribed = reminders[match.id] || subscribed

  const subscribeReminder = async () => {
    if (!email) return

    // Save to localStorage (in production, send to backend)
    const key = `reminder_${match.id}`
    localStorage.setItem(key, JSON.stringify({ email, matchId: match.id }))
    setReminders({ ...reminders, [match.id]: true })
    setSubscribed(true)
    setShowForm(false)

    console.log(`Reminder set for ${match.homeTeam} vs ${match.awayTeam}`)
  }

  const unsubscribe = () => {
    const key = `reminder_${match.id}`
    localStorage.removeItem(key)
    setReminders({ ...reminders, [match.id]: false })
    setSubscribed(false)
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔔</span>
          <div>
            <p className="font-medium">
              {match.homeTeam} vs {match.awayTeam}
            </p>
            <p className="text-sm text-gray-500">
              {match.date} • {match.time}
            </p>
          </div>
        </div>

        {!isSubscribed ? (
          showForm ? (
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-1 border rounded text-sm"
              />
              <button
                onClick={subscribeReminder}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Set
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 px-2"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Set Reminder
            </button>
          )
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-sm">✓ Reminder Set</span>
            <button
              onClick={unsubscribe}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
