'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { teams } from '@/lib/data'
import { TeamSquad } from '@/lib/teamData'
import { Language } from '@/lib/i18n'

// Position translation
const getPositionLabel = (position: string): string => {
  const labels: Record<string, string> = {
    'goalkeeper': 'GK',
    'Goalkeeper': 'GK',
    'back': 'DEF',
    'Back': 'DEF',
    'midfield': 'MID',
    'Midfielder': 'MID',
    'forward': 'FWD',
    'Forward': 'FWD'
  }
  return labels[position] || position
}

export default function TeamDetailClient({ lang }: { lang: Language }) {
  const params = useParams()
  const teamSlug = params?.team as string

  const [squad, setSquad] = useState<TeamSquad | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Find team info
  const team = teams.find(t => t.slug === teamSlug)

  useEffect(() => {
    if (!teamSlug) return

    const fetchSquad = async () => {
      setLoading(true)
      setError(null)

      try {
        const apiUrl = `/api/team-squad?slug=${teamSlug}`
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
      } catch (err: any) {
        console.error('Error fetching squad:', err)
        setError(err.message || 'Failed to load squad data')
      } finally {
        setLoading(false)
      }
    }

    fetchSquad()
  }, [teamSlug])

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

  if (error || !squad) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <div className="text-xl font-semibold text-gray-600 mb-2">Unable to load squad data</div>
          <div className="text-gray-500 mb-4">Error: {error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Combine all players
  const allPlayers = [
    ...(squad.goalkeeper || []).map(p => ({ ...p, position: 'GK' })),
    ...(squad.back || []).map(p => ({ ...p, position: 'DEF' })),
    ...(squad.midfield || []).map(p => ({ ...p, position: 'MID' })),
    ...(squad.forward || []).map(p => ({ ...p, position: 'FWD' }))
  ]

  // Sort by shirt number
  allPlayers.sort((a, b) => {
    const numA = parseInt(a.shirtNumber) || 99
    const numB = parseInt(b.shirtNumber) || 99
    return numA - numB
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{team?.flag}</div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{team?.name}</h1>
              <p className="text-blue-100">Group {team?.group}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Manager */}
        {squad.manager && (squad.manager.nameEn || squad.manager.nameZh) && (
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Coach</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
                <img
                  src={squad.manager.logo}
                  alt={squad.manager.nameEn}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(squad.manager.nameEn || 'Coach')}&background=blue&color=white`
                  }}
                />
              </div>
              <div>
                <div className="text-xl font-bold">{squad.manager.nameEn}</div>
                <div className="text-gray-500">{squad.manager.nameZh}</div>
              </div>
            </div>
          </div>
        )}

        {/* Squad Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Goals</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Assists</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">YC</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">RC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allPlayers.map((player) => (
                  <tr key={player.playerId} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="font-bold text-lg">{player.shirtNumber}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
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
                          <div className="font-medium text-gray-900">{player.nameEn}</div>
                          <div className="text-sm text-gray-500">{player.nameZh}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        player.position === 'GK' ? 'bg-yellow-100 text-yellow-700' :
                        player.position === 'DEF' ? 'bg-blue-100 text-blue-700' :
                        player.position === 'MID' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {player.position}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{player.age}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-600">{player.height}cm</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <span className="font-bold text-green-600">{player.goals}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <span className="font-bold text-blue-600">{player.assists}</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <span className={`font-medium ${player.yellowCards > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                        {player.yellowCards}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-center">
                      <span className={`font-medium ${player.redCards > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                        {player.redCards}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">
              {allPlayers.reduce((sum, p) => sum + p.goals, 0)}
            </div>
            <div className="text-sm text-gray-500">Total Goals</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">
              {allPlayers.reduce((sum, p) => sum + p.assists, 0)}
            </div>
            <div className="text-sm text-gray-500">Total Assists</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {allPlayers.reduce((sum, p) => sum + p.yellowCards, 0)}
            </div>
            <div className="text-sm text-gray-500">Yellow Cards</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-red-600">
              {allPlayers.reduce((sum, p) => sum + p.redCards, 0)}
            </div>
            <div className="text-sm text-gray-500">Red Cards</div>
          </div>
        </div>
      </div>
    </div>
  )
}
