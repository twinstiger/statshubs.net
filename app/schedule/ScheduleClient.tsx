'use client'

import { useState } from 'react'
import Link from 'next/link'
import { matches, teams } from '@/lib/data'
import { getGroupColor } from '@/lib/utils'
import { timezones } from '@/lib/data'
import { formatInTimeZone } from 'date-fns-tz'
import { parseISO } from 'date-fns'

// Get team slug by name
const getTeamSlug = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return team?.slug || ''
}

// Get team flag
const getTeamFlag = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return team?.flag || '⚽'
}

// Check if match is completed
const isMatchCompleted = (dateStr: string) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const matchDate = new Date(dateStr)
  return matchDate < today
}

// Get stage label
const getStageLabel = (stage: string) => {
  switch (stage) {
    case 'group': return 'Group Stage'
    case 'round16': return 'Round of 16'
    case 'quarterfinal': return 'Quarter Finals'
    case 'semifinal': return 'Semi Finals'
    case 'third': return 'Third Place'
    case 'final': return 'Final'
    default: return stage
  }
}

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

  // Stats
  const stats = {
    total: matches.length,
    completed: matches.filter(m => isMatchCompleted(m.date)).length,
    upcoming: matches.filter(m => !isMatchCompleted(m.date)).length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">⚽</span>
            <div>
              <h1 className="text-5xl font-black tracking-tight leading-none">Match Schedule</h1>
              <p className="text-blue-200 text-lg font-medium mt-2 tracking-wide">FIFA World Cup 2026™</p>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xl font-semibold">{stats.total} Total Matches</span>
            </div>
            <div className="h-5 w-px bg-blue-400/50"></div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
              <span className="text-base font-medium">{stats.completed} Completed</span>
            </div>
            <div className="h-5 w-px bg-blue-400/50"></div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
              <span className="text-base font-medium">{stats.upcoming} Upcoming</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-900/10 p-7 mb-8 border border-blue-100/50">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-700 uppercase tracking-wide">Timezone</label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
              >
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label} ({tz.offset})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-slate-700 uppercase tracking-wide">Group</label>
              <select
                value={filterGroup}
                onChange={(e) => setFilterGroup(e.target.value)}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
              >
                <option value="all">All Groups</option>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((g) => (
                  <option key={g} value={g}>Group {g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-slate-700 uppercase tracking-wide">Stage</label>
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:border-blue-500 focus:bg-white transition-all text-slate-700 font-medium"
              >
                <option value="all">All Stages</option>
                <option value="group">Group Stage</option>
                <option value="round16">Round of 16</option>
                <option value="quarterfinal">Quarter Finals</option>
                <option value="quarter">Quarter Finals</option>
                <option value="semifinal">Semi Finals</option>
                <option value="semi">Semi Finals</option>
                <option value="final">Final</option>
                <option value="third">Third Place</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterGroup('all')
                  setFilterStage('all')
                  setSelectedTimezone('UTC')
                }}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white px-5 py-3 rounded-xl font-bold hover:from-slate-700 hover:to-slate-800 transition-all shadow-lg"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg shadow-blue-900/5 border border-blue-100/50">
            <p className="text-3xl font-black text-blue-600">{matches.length}</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">Total Matches</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg shadow-blue-900/5 border border-blue-100/50">
            <p className="text-3xl font-black text-emerald-600">{matches.filter(m => m.stage === 'group').length}</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">Group Stage</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg shadow-blue-900/5 border border-blue-100/50">
            <p className="text-3xl font-black text-purple-600">{matches.filter(m => m.stage !== 'group').length}</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">Knockout</p>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-lg shadow-blue-900/5 border border-blue-100/50">
            <p className="text-3xl font-black text-amber-600">0</p>
            <p className="text-sm font-semibold text-slate-600 mt-1">Final</p>
          </div>
        </div>

        {/* Matches by Date */}
        <div className="space-y-10">
          {dates.map((date) => (
            <div key={date}>
              <h2 className="text-2xl font-black mb-5 pb-3 border-b-2 border-blue-200 flex items-center gap-3">
                <span className="text-blue-600">📅</span>
                {formatDateInTz(date)}
              </h2>
              <div className="space-y-6">
                {groupedByDate[date].map((match) => {
                  const isCompleted = isMatchCompleted(match.date)

                  return (
                    <div
                      key={match.id}
                      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-0.5 ${
                        isCompleted
                          ? 'bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200'
                          : 'bg-white border border-blue-100 shadow-lg shadow-blue-900/5'
                      }`}
                    >
                      {/* Status Indicator Line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                        isCompleted
                          ? 'bg-gradient-to-b from-emerald-400 to-emerald-600'
                          : 'bg-gradient-to-b from-blue-500 to-indigo-600'
                      }`}></div>

                      <div className="p-8 pl-10 flex items-center gap-10">
                        {/* Status Badge */}
                        <div className="flex-shrink-0">
                          <div className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider ${
                            isCompleted
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                              : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-200'
                          }`}>
                            {isCompleted ? '✓ Completed' : '⏳ Upcoming'}
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex-shrink-0 w-36 text-left border-r-2 border-slate-200 pr-8">
                          <div className={`text-3xl font-black tracking-tight ${isCompleted ? 'text-slate-500' : 'text-blue-600'}`}>
                            {convertTime(match.date, match.time)}
                          </div>
                          <div className={`text-sm font-medium mt-2 ${isCompleted ? 'text-slate-400' : 'text-slate-500'}`}>
                            {selectedTimezone}
                          </div>
                        </div>

                        {/* Teams - Much wider spacing */}
                        <div className="flex-1 flex items-center justify-center gap-12">
                          {/* Home Team */}
                          <div className="flex-1 flex items-center justify-end gap-6">
                            <div className="text-right">
                              <Link href={`/tools/teams/${getTeamSlug(match.homeTeam)}`} className={`font-black text-3xl tracking-tight leading-tight hover:text-blue-600 transition-colors ${isCompleted ? 'text-slate-500' : 'text-slate-900'}`}>
                                {match.homeTeam}
                              </Link>
                              <div className={`text-xs font-bold mt-3 uppercase tracking-widest ${isCompleted ? 'text-slate-400' : 'text-slate-400'}`}>
                                Home
                              </div>
                            </div>
                            <span className="text-5xl filter drop-shadow-lg">{getTeamFlag(match.homeTeam)}</span>
                          </div>

                          {/* VS Badge */}
                          <div className={`flex-shrink-0 px-10 py-5 rounded-2xl font-black text-lg tracking-widest ${
                            isCompleted
                              ? 'bg-slate-200 text-slate-500'
                              : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-blue-600/40'
                          }`}>
                            VS
                          </div>

                          {/* Away Team */}
                          <div className="flex-1 flex items-center gap-6">
                            <span className="text-5xl filter drop-shadow-lg">{getTeamFlag(match.awayTeam)}</span>
                            <div className="text-left">
                              <Link href={`/tools/teams/${getTeamSlug(match.awayTeam)}`} className={`font-black text-3xl tracking-tight leading-tight hover:text-blue-600 transition-colors ${isCompleted ? 'text-slate-500' : 'text-slate-900'}`}>
                                {match.awayTeam}
                              </Link>
                              <div className={`text-xs font-bold mt-3 uppercase tracking-widest ${isCompleted ? 'text-slate-400' : 'text-slate-400'}`}>
                                Away
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Venue & Location */}
                        <div className="flex-shrink-0 w-48 text-left border-l-2 border-slate-200 pl-8">
                          <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${isCompleted ? 'text-slate-400' : 'text-slate-500'}`}>
                            Venue
                          </div>
                          <div className={`text-base font-bold leading-tight ${isCompleted ? 'text-slate-500' : 'text-slate-800'}`}>
                            📍 {match.venue}
                          </div>
                          <div className={`text-sm font-medium mt-2 ${isCompleted ? 'text-slate-400' : 'text-slate-500'}`}>
                            {match.city}
                          </div>
                        </div>

                        {/* Group/Stage Badge */}
                        <div className="flex-shrink-0">
                          {match.group ? (
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-sm font-black rounded-xl shadow-xl shadow-blue-600/30 uppercase tracking-wider">
                              <span>🏆</span> Group {match.group}
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-black rounded-xl shadow-xl shadow-amber-500/30 uppercase tracking-wider">
                              <span>⚡</span> {getStageLabel(match.stage)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="bg-white rounded-2xl p-16 text-center shadow-lg border border-slate-100">
            <div className="text-7xl mb-5">🔍</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">No matches found</h3>
            <p className="text-slate-500 text-lg">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
