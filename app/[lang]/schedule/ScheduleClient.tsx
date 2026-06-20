'use client'

import { useState, useMemo } from 'react'
import Script from 'next/script'
import { matches, teams } from '@/lib/data'
import { Language } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'
import BracketClient from './BracketClient'

interface ScheduleClientProps {
  lang: Language
}

type StageFilter = 'all' | 'group' | 'round16' | 'quarterfinal' | 'semifinal' | 'third' | 'final'

// Get team flag by name
const getTeamFlag = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return team?.flag || '⚽'
}

// Get team slug by name
const getTeamSlug = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return team?.slug || ''
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

// Get stage order for sorting
const getStageOrder = (stage: string) => {
  const order: Record<string, number> = {
    'group': 1,
    'round16': 2,
    'quarterfinal': 3,
    'semifinal': 4,
    'third': 5,
    'final': 6
  }
  return order[stage] || 99
}

// Check if match is completed
const isMatchCompleted = (dateStr: string) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const matchDate = new Date(dateStr)
  return matchDate < today
}

// Format date for display
const formatDate = (dateStr: string, lang: Language) => {
  const date = new Date(dateStr)
  const localeMap: Record<Language, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    ja: 'ja-JP',
    pt: 'pt-BR'
  }
  return date.toLocaleDateString(localeMap[lang] || 'en-US', {
    month: 'short',
    day: 'numeric'
  })
}

// Format full date with year
const formatFullDate = (dateStr: string, lang: Language) => {
  const date = new Date(dateStr)
  const localeMap: Record<Language, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    ja: 'ja-JP',
    pt: 'pt-BR'
  }
  return date.toLocaleDateString(localeMap[lang] || 'en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// Format date only (no year)
const formatDateOnly = (dateStr: string, lang: Language) => {
  const date = new Date(dateStr)
  const localeMap: Record<Language, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    ja: 'ja-JP',
    pt: 'pt-BR'
  }
  return date.toLocaleDateString(localeMap[lang] || 'en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

// Filter tabs
const filterTabs = [
  { key: 'all', label: 'All' },
  { key: 'group', label: 'Group Stage' },
  { key: 'round16', label: 'Round of 16' },
  { key: 'quarterfinal', label: 'Quarter Finals' },
  { key: 'semifinal', label: 'Semi Finals' },
  { key: 'final', label: 'Final' },
]

export default function ScheduleClient({ lang }: ScheduleClientProps) {
  const [filter, setFilter] = useState<StageFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const t = getTranslations(lang)

  // Filter and sort matches
  const filteredMatches = useMemo(() => {
    let result = matches

    // Filter by stage
    if (filter !== 'all') {
      result = result.filter(m => m.stage === filter)
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(m =>
        m.homeTeam.toLowerCase().includes(query) ||
        m.awayTeam.toLowerCase().includes(query) ||
        m.venue.toLowerCase().includes(query) ||
        m.city.toLowerCase().includes(query)
      )
    }

    // Sort by date and time
    return result.sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date)
      if (dateCompare !== 0) return dateCompare
      return a.time.localeCompare(b.time)
    })
  }, [filter, searchQuery])

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
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">⚽</span>
            <div>
              <h1 className="text-5xl font-black tracking-tight leading-none">{t?.schedule || 'Match Schedule'}</h1>
              <p className="text-blue-200 text-lg font-medium mt-2 tracking-wide">FIFA World Cup 2026™</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-blue-100 mt-6">
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
        {/* Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-900/10 p-7 mb-8 border border-blue-100/50">
          {/* View Mode Toggle */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-5 border-b border-gradient-to-r from-blue-100 to-transparent">
            <div className="flex gap-3">
              <div className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2.5 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-600/40">
                <span className="text-lg">🏆</span> Tournament Bracket
              </div>
            </div>
            <div className="text-sm text-slate-600 font-semibold tracking-wide">
              {filteredMatches.length} matches found
            </div>
          </div>

          {/* Stage Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-5">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as StageFilter)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  filter === tab.key
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-lg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search teams, venues, cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 text-base"
            />
          </div>
        </div>

        {/* Advertisement */}
        <div className="mb-6">
          <div className="w-full max-w-[728px] mx-auto">
            <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Script
                async
                dangerouslySetInnerHTML={{
                  __html: `
                    var _pop = _pop || [];
                    _pop.push(['place', '728x90']);
                    (function() {
                      var s = document.createElement('script');
                      s.src = '//pl29763332.effectivecpmnetwork.com/29662833/invoke.js';
                      s.async = true;
                      document.head.appendChild(s);
                    })();
                  `
                }}
              />
              <Script
                id="adsterra-secondary"
                src="https://pl29763342.effectivecpmnetwork.com/76/24/27/762427d2c49841bf978fdff5e81cd616.js"
                async
              />
              <div id="728x90"></div>
            </div>
          </div>
        </div>

        {/* Content - Bracket View Only */}
        <BracketClient lang={lang} />

        {/* Summary Footer */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-xl shadow-blue-900/10 border border-blue-100/50">
          <div className="flex flex-wrap justify-between items-center gap-5">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/40"></div>
                <span className="text-sm text-slate-700 font-semibold tracking-wide">
                  Completed: <span className="font-black text-slate-900">{stats.completed}</span>
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/40"></div>
                <span className="text-sm text-slate-700 font-semibold tracking-wide">
                  Upcoming: <span className="font-black text-slate-900">{stats.upcoming}</span>
                </span>
              </div>
            </div>
            <div className="text-sm text-slate-600 font-semibold tracking-wide">
              Showing <span className="font-black text-blue-600">{filteredMatches.length}</span> of <span className="font-black text-slate-900">{stats.total}</span> matches
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
