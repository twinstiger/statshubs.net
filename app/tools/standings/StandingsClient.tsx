'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getGroupColor } from '@/lib/utils'
import { Adsterra728x90 } from '@/components/ads/AdsterraAd'

interface StandingTeam {
  rank: number
  team: string
  teamSlug: string
  flag: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
}

interface GroupStanding {
  group: string
  teams: StandingTeam[]
}

export default function StandingsClient() {
  const [standings, setStandings] = useState<GroupStanding[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [showRules, setShowRules] = useState(false)

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch('/api/standings')
        const data = await response.json()
        if (data.code === 0 && data.data) {
          setStandings(data.data)
        }
      } catch (error) {
        console.error('Error fetching standings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStandings()
  }, [])

  const formatGD = (gd: number) => {
    return gd > 0 ? `+${gd}` : `${gd}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">⚽</div>
          <div className="text-xl font-semibold text-gray-600">Loading standings...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">📊 World Cup 2026 Group Standings</h1>
          <p className="text-gray-600">
            Live tracking of all group stage results and standings. Updated after every match.
          </p>
        </div>

        {/* Group Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGroup(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedGroup === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Groups
            </button>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedGroup === group
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Group {group}
              </button>
            ))}
          </div>
        </div>

        {/* Advertisement */}
        <Adsterra728x90 />

        {/* Standings Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {standings
            .filter((g) => !selectedGroup || g.group === selectedGroup)
            .map((group) => (
              <div key={group.group} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Group {group.group}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-xs text-gray-600 border-b">
                        <th className="text-left px-4 py-3 font-medium">#</th>
                        <th className="text-left px-4 py-3 font-medium">Team</th>
                        <th className="text-center px-2 py-3 font-medium">P</th>
                        <th className="text-center px-2 py-3 font-medium">W</th>
                        <th className="text-center px-2 py-3 font-medium">D</th>
                        <th className="text-center px-2 py-3 font-medium">L</th>
                        <th className="text-center px-2 py-3 font-medium">GF</th>
                        <th className="text-center px-2 py-3 font-medium">GA</th>
                        <th className="text-center px-2 py-3 font-medium">GD</th>
                        <th className="text-center px-2 py-3 font-medium">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.teams.map((team, idx) => (
                        <tr
                          key={team.team}
                          className={`border-b last:border-0 ${
                            idx < 2 ? 'bg-green-50' : idx === 2 ? 'bg-yellow-50' : ''
                          }`}
                        >
                          <td className="px-4 py-3 font-bold">{idx + 1}</td>
                          <td className="px-4 py-3">
                            <Link href={`/tools/teams/${team.teamSlug}`} className="flex items-center gap-2 hover:text-blue-600">
                              <span className="text-xl">{team.flag}</span>
                              <span className="font-medium hover:underline">{team.team}</span>
                            </Link>
                          </td>
                          <td className="text-center px-2 py-3">{team.played}</td>
                          <td className="text-center px-2 py-3">{team.won}</td>
                          <td className="text-center px-2 py-3">{team.drawn}</td>
                          <td className="text-center px-2 py-3">{team.lost}</td>
                          <td className="text-center px-2 py-3">{team.goalsFor}</td>
                          <td className="text-center px-2 py-3">{team.goalsAgainst}</td>
                          <td className="text-center px-2 py-3 font-medium">
                            {formatGD(team.goalDifference)}
                          </td>
                          <td className="text-center px-2 py-3 font-bold text-lg">{team.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Legend */}
                <div className="px-4 py-3 bg-gray-50 border-t text-xs flex gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-200 rounded"></span>
                    Advance (Top 2)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-yellow-200 rounded"></span>
                    Best Third Place
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* 2026 Format Explanation */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <button
            onClick={() => setShowRules(!showRules)}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-2xl font-bold">Understanding the 2026 World Cup Format</h2>
            <span className="text-2xl">{showRules ? '−' : '+'}</span>
          </button>

          {showRules && (
            <div className="mt-6 prose max-w-none">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Group Stage Structure</h3>
                  <ul className="space-y-2">
                    <li>• 48 teams divided into 12 groups of 4 teams</li>
                    <li>• Each team plays 3 group stage matches</li>
                    <li>• Top 2 teams from each group advance automatically</li>
                    <li>• 8 best third-place teams also advance</li>
                    <li>• Total of 32 teams in knockout stage</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3">Tiebreaker Rules</h3>
                  <ol className="space-y-2">
                    <li>1. Points in all group matches</li>
                    <li>2. Goal difference in all group matches</li>
                    <li>3. Number of goals scored in all group matches</li>
                    <li>4. Points in matches between tied teams</li>
                    <li>5. Goal difference in matches between tied teams</li>
                    <li>6. Goals scored in matches between tied teams</li>
                    <li>7. Fair play points (yellow/red cards)</li>
                    <li>8. Drawing of lots by FIFA Organizing Committee</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Knockout Stage</h3>
                  <ul className="space-y-2">
                    <li>• Round of 32: 32 teams → 16 teams</li>
                    <li>• Round of 16: 16 teams → 8 teams</li>
                    <li>• Quarterfinals: 8 teams → 4 teams</li>
                    <li>• Semifinals: 4 teams → 2 teams</li>
                    <li>• Third Place: Losers of semifinals</li>
                    <li>• Final: Winners of semifinals</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-3">Key Changes from 2022</h3>
                  <ul className="space-y-2">
                    <li>• Groups expanded from 8 to 12 groups</li>
                    <li>• 4 teams per group (was 4)</li>
                    <li>• 3 group matches per team (same as before)</li>
                    <li>• Total of 104 matches (was 64)</li>
                    <li>• Matches spread across 3 countries</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold mb-2">Qualification Scenarios</h4>
                <p className="text-sm text-gray-700">
                  With 8 of 12 third-place teams advancing, teams still have hope even after a loss.
                  The third-place race adds excitement to every group stage match as teams battle for the
                  best possible record to advance.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Updates Info */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚽</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Live Standings Updates</h3>
              <p className="text-blue-100">
                Standings are updated in real-time after each match. Check back regularly for the latest
                group stage results and qualification scenarios.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <a href="/tools/bracket-maker" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">🏆</div>
            <h4 className="font-semibold">Bracket Maker</h4>
            <p className="text-sm text-gray-600">Predict tournament results</p>
          </a>
          <a href="/tools/timezone-converter" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h4 className="font-semibold">Time Zone Converter</h4>
            <p className="text-sm text-gray-600">Convert match times</p>
          </a>
          <a href="/schedule" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-semibold">Match Schedule</h4>
            <p className="text-sm text-gray-600">View all fixtures</p>
          </a>
        </div>
      </div>
    </div>
  )
}
