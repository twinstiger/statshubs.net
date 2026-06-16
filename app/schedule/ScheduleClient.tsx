'use client'

import { useState } from 'react'
import { matches } from '@/lib/data'
import { formatDate, getGroupColor } from '@/lib/utils'
import { timezones } from '@/lib/data'
import { formatInTimeZone } from 'date-fns-tz'
import { parseISO } from 'date-fns'

export default function ScheduleClient() {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC')
  const [filterGroup, setFilterGroup] = useState('all')
  const [filterStage, setFilterStage] = useState('all')

  const filteredMatches = matches.filter((match) => {
    const groupMatch = filterGroup === 'all' || match.group === filterGroup
    const stageMatch = filterStage === 'all' || match.stage === filterStage
    return groupMatch && stageMatch
  })

  const convertTime = (dateStr: string, timeStr: string) => {
    try {
      const dateTime = `${dateStr}T${timeStr}:00`
      return formatInTimeZone(parseISO(dateTime), selectedTimezone, 'h:mm a')
    } catch {
      return timeStr
    }
  }

  const formatDateInTz = (dateStr: string) => {
    try {
      return formatInTimeZone(parseISO(dateStr), selectedTimezone, 'EEEE, MMMM d, yyyy')
    } catch {
      return dateStr
    }
  }

  const groupedByDate = filteredMatches.reduce((acc, match) => {
    const date = match.date
    if (!acc[date]) acc[date] = []
    acc[date].push(match)
    return acc
  }, {} as Record<string, typeof matches>)

  const dates = Object.keys(groupedByDate).sort()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">📅 World Cup 2026 Match Schedule</h1>
          <p className="text-gray-600">
            Complete schedule of all 104 World Cup matches. Filter by group, stage, or timezone.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Timezone</label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label} ({tz.offset})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Group</label>
              <select
                value={filterGroup}
                onChange={(e) => setFilterGroup(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="all">All Groups</option>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((g) => (
                  <option key={g} value={g}>Group {g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Stage</label>
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="all">All Stages</option>
                <option value="group">Group Stage</option>
                <option value="round16">Round of 16</option>
                <option value="quarter">Quarterfinals</option>
                <option value="semi">Semifinals</option>
                <option value="final">Final</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterGroup('all')
                  setFilterStage('all')
                  setSelectedTimezone('UTC')
                }}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600">{matches.length}</p>
            <p className="text-sm text-gray-600">Total Matches</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-green-600">{matches.filter(m => m.stage === 'group').length}</p>
            <p className="text-sm text-gray-600">Group Stage</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-purple-600">{matches.filter(m => m.stage === 'round16').length}</p>
            <p className="text-sm text-gray-600">Knockout</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-yellow-600">1</p>
            <p className="text-sm text-gray-600">Final</p>
          </div>
        </div>

        {/* Matches by Date */}
        <div className="space-y-8">
          {dates.map((date) => (
            <div key={date}>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">
                {formatDateInTz(date)}
              </h2>
              <div className="grid gap-4">
                {groupedByDate[date].map((match) => (
                  <div key={match.id} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {match.group && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getGroupColor(match.group)}`}>
                            Group {match.group}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 uppercase">{match.stage}</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">
                        {convertTime(match.date, match.time)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex-1 text-center">
                        <p className="font-bold text-xl">{match.homeTeam}</p>
                        {match.homeScore !== undefined && (
                          <p className="text-3xl font-bold text-gray-400">{match.homeScore}</p>
                        )}
                      </div>
                      <div className="px-8 text-gray-400 text-2xl">vs</div>
                      <div className="flex-1 text-center">
                        <p className="font-bold text-xl">{match.awayTeam}</p>
                        {match.awayScore !== undefined && (
                          <p className="text-3xl font-bold text-gray-400">{match.awayScore}</p>
                        )}
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
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No matches found matching your criteria.
          </div>
        )}
      </div>
    </div>
  )
}
