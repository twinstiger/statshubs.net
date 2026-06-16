'use client'

import { matches } from '@/lib/data'

export default function CalendarExport() {
  const generateICS = () => {
    const events = matches.map(match => {
      const startDate = new Date(`${match.date}T${match.time}:00`)
      const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // 2 hours

      const formatDate = (date: Date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      }

      return `BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${match.homeTeam} vs ${match.awayTeam}
DESCRIPTION:World Cup 2026 - ${match.group ? `Group ${match.group}` : match.stage}
LOCATION:${match.venue}, ${match.city}
END:VEVENT`
    }).join('\n')

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//StatsHubs//World Cup 2026//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events}
END:VCALENDAR`

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'world-cup-2026.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">📅 Export to Calendar</h3>
      <p className="text-gray-600 mb-4">
        Add all World Cup 2026 matches to your calendar app (Google Calendar, Apple Calendar, Outlook, etc.)
      </p>

      <button
        onClick={generateICS}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <span>📥</span>
        <span>Download Calendar File (.ics)</span>
      </button>

      <div className="mt-4 text-sm text-gray-500">
        <p>Compatible with:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Google Calendar</li>
          <li>Apple Calendar (macOS/iOS)</li>
          <li>Microsoft Outlook</li>
          <li>Any calendar app that supports .ics files</li>
        </ul>
      </div>
    </div>
  )
}
