'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { teams } from '@/lib/data'
import { TeamSquad } from '@/lib/teamData'

export default function TeamDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  const [squad, setSquad] = useState<TeamSquad | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Find team info
  const team = teams.find((t) => t.slug === slug)
  const groupTeams = teams.filter((t) => t.group === team?.group && t.slug !== slug)

  useEffect(() => {
    if (!slug) return

    const fetchSquad = async () => {
      setLoading(true)
      setError(null)

      try {
        // Use local data
        const { getTeamSquad } = await import('@/data/squads')
        const localSquad = getTeamSquad(slug)

        if (localSquad) {
          setSquad(localSquad)
        } else {
          // Fallback: try API if local data not available
          const { teamIds, getTeamApiUrl } = await import('@/lib/teamData')
          const teamId = teamIds[slug]

          if (!teamId) {
            setError('Team data not available')
            setLoading(false)
            return
          }

          const apiUrl = getTeamApiUrl(teamId)
          const response = await fetch(apiUrl)

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const data = await response.json()

          if (data.code === 0 && data.data) {
            setSquad(data.data)
          } else {
            setError(data.message || 'Failed to load squad data')
          }
        }
      } catch (err: any) {
        console.error('Error fetching squad:', err)
        setError(err.message || 'Failed to load squad data')
      } finally {
        setLoading(false)
      }
    }

    fetchSquad()
  }, [slug])

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Team Not Found</h2>
          <Link href="/tools/teams" className="text-blue-600 hover:underline">
            ← Back to Teams
          </Link>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">⚽</div>
          <div className="text-xl font-semibold text-gray-600">Loading squad data...</div>
        </div>
      </div>
    )
  }

  // Combine all players
  const allPlayers = squad ? [
    ...(squad.goalkeeper || []).map(p => ({ ...p, position: 'GK' })),
    ...(squad.back || []).map(p => ({ ...p, position: 'DEF' })),
    ...(squad.midfield || []).map(p => ({ ...p, position: 'MID' })),
    ...(squad.forward || []).map(p => ({ ...p, position: 'FWD' }))
  ] : []

  // Sort by shirt number
  allPlayers.sort((a, b) => {
    const numA = parseInt(a.shirtNumber) || 99
    const numB = parseInt(b.shirtNumber) || 99
    return numA - numB
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/tools/teams" className="text-blue-600 hover:underline">
            ← Back to Teams
          </Link>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white">
            <div className="flex items-center gap-6">
              <span className="text-8xl">{team.flag}</span>
              <div>
                <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
                <div className="flex gap-6 text-blue-100">
                  <span>🏆 Group {team.group}</span>
                  <span>📅 Manager: {squad?.manager?.nameEn || team.manager}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Team Overview</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{team.history.appearances}</p>
                  <p className="text-sm text-gray-600">World Cup Appearances</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{team.history.titles}</p>
                  <p className="text-sm text-gray-600">World Cup Titles</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">{team.group}</p>
                  <p className="text-sm text-gray-600">Group</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Best World Cup Result</h3>
                <p className="text-gray-700">{team.history.bestResult}</p>
              </div>
            </div>

            {/* Squad Table */}
            {error ? (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Squad Roster</h2>
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">😕</div>
                  <p className="text-gray-600 mb-2">Unable to load squad data</p>
                  <p className="text-sm text-gray-500">Error: {error}</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Squad Roster ({allPlayers.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">#</th>
                        <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Pos</th>
                        <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Age</th>
                        <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase">Height</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Goals</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Assists</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allPlayers.map((player) => (
                        <tr key={player.playerId} className="border-t hover:bg-gray-50">
                          <td className="px-4 py-3 font-bold">{player.shirtNumber}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                                <img
                                  src={player.logo}
                                  alt={player.nameEn}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.nameEn)}&background=random`
                                  }}
                                />
                              </div>
                              <div>
                                <p className="font-medium">{player.nameEn}</p>
                                <p className="text-xs text-gray-500">{player.nameZh}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              player.position === 'GK' ? 'bg-yellow-100 text-yellow-700' :
                              player.position === 'DEF' ? 'bg-blue-100 text-blue-700' :
                              player.position === 'MID' ? 'bg-green-100 text-green-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {player.position}
                            </span>
                          </td>
                          <td className="px-4 py-3">{player.age}</td>
                          <td className="px-4 py-3">{player.height}cm</td>
                          <td className="px-4 py-3 text-center font-bold text-green-600">{player.goals}</td>
                          <td className="px-4 py-3 text-center font-bold text-blue-600">{player.assists}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Group Standings */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Group {team.group} Teams</h3>
              <div className="space-y-3">
                {groupTeams.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tools/teams/${t.slug}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl">{t.flag}</span>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm text-gray-500">Manager: {t.manager}</p>
                    </div>
                  </Link>
                ))}
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <span className="text-2xl">{team.flag}</span>
                  <div>
                    <p className="font-medium">{team.name}</p>
                    <p className="text-sm text-blue-600">Current Team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/tools/bracket-maker" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  🏆 Create Your Bracket
                </Link>
                <Link href="/tools/standings" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  📊 View Standings
                </Link>
                <Link href="/tools/timezone-converter" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  🌍 Match Times
                </Link>
                <Link href="/schedule" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  📅 Full Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
