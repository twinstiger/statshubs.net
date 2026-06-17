'use client'

import { useState } from 'react'
import Link from 'next/link'
import { teams } from '@/lib/data'
import { Language } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'

interface TeamsClientProps {
  lang: Language
}

export default function TeamsClient({ lang }: TeamsClientProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const t = getTranslations(lang)

  // Get unique groups
  const groups = ['all', ...Array.from(new Set(teams.map(t => t.group))).sort()]

  // Filter teams
  const filteredTeams = teams.filter(team => {
    const matchesGroup = selectedGroup === 'all' || team.group === selectedGroup
    const matchesSearch = !searchQuery ||
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.slug.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGroup && matchesSearch
  })

  // Group teams
  const groupedTeams = filteredTeams.reduce((acc, team) => {
    if (!acc[team.group]) {
      acc[team.group] = []
    }
    acc[team.group].push(team)
    return acc
  }, {} as Record<string, typeof teams>)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{t?.teams || 'Team Squads'}</h1>
          <p className="text-blue-100">Complete directory of all 48 participating teams</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          {/* Group Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {groups.map(group => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedGroup === group
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {group === 'all' ? 'All Groups' : `Group ${group}`}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Teams Grid */}
        <div className="space-y-8">
          {Object.entries(groupedTeams)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([group, groupTeams]) => (
              <div key={group}>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">
                    Group {group}
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {groupTeams.map(team => (
                    <Link
                      key={team.slug}
                      href={`/${lang === 'en' ? '' : lang + '/'}teams/${team.slug}`}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{team.flag}</span>
                        <div>
                          <h3 className="font-bold text-lg">{team.name}</h3>
                          <p className="text-sm text-gray-500">Manager: {team.manager}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div>Best Result: {team.history.bestResult}</div>
                        <div>World Cup Appearances: {team.history.appearances}</div>
                      </div>
                      <div className="mt-4 text-blue-600 text-sm font-medium">
                        View Squad →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No teams found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
