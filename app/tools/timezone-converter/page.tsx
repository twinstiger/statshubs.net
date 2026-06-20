'use client'

import { useState } from 'react'
import Link from 'next/link'
import { matches, timezones, teams } from '@/lib/data'
import { formatDate, getGroupColor } from '@/lib/utils'
import { formatInTimeZone } from 'date-fns-tz'
import { parseISO } from 'date-fns'
import { AdScript, AdBanner } from '@/components/ads/AdScript'

// Get team slug by name
const getTeamSlug = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return team?.slug || ''
}

export default function TimezoneConverterPage() {
  const [selectedTimezone, setSelectedTimezone] = useState('America/New_York')
  const [filterGroup, setFilterGroup] = useState('all')
  const [filterTeam, setFilterTeam] = useState('')

  const filteredMatches = matches.filter((match) => {
    const groupMatch = filterGroup === 'all' || match.group === filterGroup
    const teamMatch = !filterTeam ||
      match.homeTeam.toLowerCase().includes(filterTeam.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(filterTeam.toLowerCase())
    return groupMatch && teamMatch
  })

  const convertTime = (dateStr: string, timeStr: string) => {
    try {
      const dateTime = `${dateStr}T${timeStr}:00`
      return formatInTimeZone(parseISO(dateTime), selectedTimezone, 'h:mm a')
    } catch {
      return timeStr
    }
  }

  const getDateInTimezone = (dateStr: string) => {
    try {
      return formatInTimeZone(parseISO(dateStr), selectedTimezone, 'EEE, MMM d')
    } catch {
      return dateStr
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">🌍 World Cup 2026 Time Zone Converter</h1>
          <p className="text-gray-600">
            Convert all 104 World Cup match times to your local timezone. Never miss a game!
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Your Timezone</label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label} ({tz.offset})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Filter by Group</label>
              <select
                value={filterGroup}
                onChange={(e) => setFilterGroup(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Groups</option>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((g) => (
                  <option key={g} value={g}>Group {g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Search Team</label>
              <input
                type="text"
                placeholder="e.g., Brazil, Argentina..."
                value={filterTeam}
                onChange={(e) => setFilterTeam(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Timezone Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800">
            <strong>Showing times in:</strong> {timezones.find(tz => tz.value === selectedTimezone)?.label}
            {' '}({timezones.find(tz => tz.value === selectedTimezone)?.offset})
          </p>
          <p className="text-xs text-blue-600 mt-1">
            {filteredMatches.length} matches shown
          </p>
        </div>

        {/* Match List */}
        <div className="space-y-4">
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGroupColor(match.group || 'A')}`}>
                    Group {match.group}
                  </span>
                  <span className="text-sm text-gray-500">
                    {getDateInTimezone(match.date)}
                  </span>
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  {convertTime(match.date, match.time)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <Link href={`/tools/teams/${getTeamSlug(match.homeTeam)}`} className="font-bold text-lg hover:text-blue-600">
                    {match.homeTeam}
                  </Link>
                </div>
                <div className="px-8">
                  <span className="text-gray-400 text-xl">vs</span>
                </div>
                <div className="flex-1 text-center">
                  <Link href={`/tools/teams/${getTeamSlug(match.awayTeam)}`} className="font-bold text-lg hover:text-blue-600">
                    {match.awayTeam}
                  </Link>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-sm text-gray-600">
                  📍 {match.venue}, {match.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No matches found matching your criteria.
          </div>
        )}

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">How to Use the World Cup Time Zone Converter</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              The FIFA World Cup 2026 is being held across multiple time zones in the United States, Canada, and Mexico.
              With 48 teams competing in 104 matches over 39 days, keeping track of kickoff times can be challenging.
              Our comprehensive time zone converter helps you instantly see when every match starts in your local time.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Universal Coverage:</strong> Convert times for all 104 World Cup matches</li>
              <li><strong>Multiple Timezones:</strong> Support for 15+ global timezones including US, Europe, Asia, and Australia</li>
              <li><strong>Team Filtering:</strong> Quickly find matches featuring your favorite team</li>
              <li><strong>Group Filtering:</strong> View matches by specific group stages</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on smartphones and tablets</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">World Cup 2026 Match Schedule Overview</h3>
            <p className="mb-4">
              The tournament kicks off on June 11, 2026, with the final scheduled for July 19, 2026.
              Group stage matches will be played from June 11-28, followed by the Round of 16 (June 30 - July 3),
              Quarterfinals (July 6-7), Semifinals (July 10-11), Third Place playoff (July 18), and the Final (July 19).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">What timezone are World Cup matches scheduled in?</h4>
                <p className="text-gray-600">Matches are scheduled in local time zones of the host cities. The US matches will primarily be in Eastern, Central, Mountain, and Pacific time zones.</p>
              </div>
              <div>
                <h4 className="font-semibold">How can I add World Cup matches to my calendar?</h4>
                <p className="text-gray-600">Use our printable schedule generator to download an .ics calendar file that you can import into any calendar app.</p>
              </div>
              <div>
                <h4 className="font-semibold">Will match times change due to TV broadcasting?</h4>
                <p className="text-gray-600">While some kickoff times may be adjusted for broadcast purposes, our tool is updated in real-time to reflect any changes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AdBanner />

    <AdScript />
    </>
  )
}
