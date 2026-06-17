'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Language } from '@/lib/i18n'
import { getTranslations } from '@/lib/translations'
import { teams } from '@/lib/data'

interface BracketClientProps {
  lang: Language
}

// Bracket match structure
interface BracketMatch {
  id: string
  round: 'round16' | 'quarterfinal' | 'semifinal' | 'third' | 'final'
  matchNum: number
  homeTeam?: string
  awayTeam?: string
  homeFlag?: string
  awayFlag?: string
  homeScore?: number
  awayScore?: number
  homeConfederation?: string
  awayConfederation?: string
}

// Get team info
const getTeamInfo = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  return {
    flag: team?.flag || '⚽',
    confederation: team ? getConfederation(team.group) : ''
  }
}

// Get confederation color
const getConfederation = (group: string): string => {
  if (['A', 'B'].includes(group)) return 'CONCACAF'
  if (['C', 'D'].includes(group)) return 'CONMEBOL'
  return 'UEFA'
}

// Generate bracket data with real teams
const generateBracket = (): BracketMatch[] => {
  return [
    // Round of 16
    { id: 'r16-1', round: 'round16', matchNum: 1, homeTeam: 'Mexico', awayTeam: 'South Korea', homeFlag: '🇲🇽', awayFlag: '🇰🇷', homeConfederation: 'CONCACAF', awayConfederation: 'CONCACAF', homeScore: 2, awayScore: 1 },
    { id: 'r16-2', round: 'round16', matchNum: 2, homeTeam: 'Brazil', awayTeam: 'Haiti', homeFlag: '🇧🇷', awayFlag: '🇭🇹', homeConfederation: 'UEFA', awayConfederation: 'UEFA', homeScore: 4, awayScore: 0 },
    { id: 'r16-3', round: 'round16', matchNum: 3, homeTeam: 'Germany', awayTeam: 'Ecuador', homeFlag: '🇩🇪', awayFlag: '🇪🇨', homeConfederation: 'UEFA', awayConfederation: 'UEFA', homeScore: 1, awayScore: 1 },
    { id: 'r16-4', round: 'round16', matchNum: 4, homeTeam: 'Argentina', awayTeam: 'Algeria', homeFlag: '🇦🇷', awayFlag: '🇩🇿', homeConfederation: 'CONMEBOL', awayConfederation: 'CONMEBOL', homeScore: 3, awayScore: 0 },
    { id: 'r16-5', round: 'round16', matchNum: 5 },
    { id: 'r16-6', round: 'round16', matchNum: 6 },
    { id: 'r16-7', round: 'round16', matchNum: 7 },
    { id: 'r16-8', round: 'round16', matchNum: 8 },
    // Quarter Finals
    { id: 'qf-1', round: 'quarterfinal', matchNum: 1 },
    { id: 'qf-2', round: 'quarterfinal', matchNum: 2 },
    { id: 'qf-3', round: 'quarterfinal', matchNum: 3 },
    { id: 'qf-4', round: 'quarterfinal', matchNum: 4 },
    // Semi Finals
    { id: 'sf-1', round: 'semifinal', matchNum: 1 },
    { id: 'sf-2', round: 'semifinal', matchNum: 2 },
    // Third Place
    { id: 'third', round: 'third', matchNum: 1 },
    // Final
    { id: 'final', round: 'final', matchNum: 1 },
  ]
}

// Match Card Component - Scores below VS
const MatchCard = ({ match }: { match: BracketMatch }) => {
  const isCompleted = match.homeScore !== undefined
  const homeWon = isCompleted && match.homeScore !== undefined && match.awayScore !== undefined && match.homeScore > match.awayScore
  const awayWon = isCompleted && match.homeScore !== undefined && match.awayScore !== undefined && match.awayScore > match.homeScore

  return (
    <div className={`rounded-xl border-2 overflow-hidden w-56 shadow-lg transition-all duration-200 hover:shadow-xl ${
      isCompleted
        ? 'bg-gradient-to-b from-white to-slate-50 border-slate-200'
        : 'bg-white border-blue-200'
    }`}>
      {/* Match Header */}
      <div className={`px-4 py-2 text-center font-bold text-xs tracking-wide ${
        isCompleted ? 'bg-slate-100 text-slate-600' : 'bg-blue-100 text-blue-700'
      }`}>
        Match {match.matchNum}
      </div>

      {/* Teams with VS */}
      <div className="px-4 py-3">
        {/* Home Team Row */}
        <div className={`flex items-center justify-between py-2 ${
          homeWon ? 'bg-gradient-to-r from-emerald-50 to-white px-2 -mx-2 rounded-lg' : ''
        }`}>
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl filter drop-shadow-sm">{match.homeFlag || '⚽'}</span>
            <div className="flex-1 min-w-0">
              <div className={`font-bold text-base truncate leading-tight ${match.homeTeam ? 'text-slate-900' : 'text-slate-400'}`}>
                {match.homeTeam || 'TBD'}
              </div>
            </div>
          </div>
        </div>

        {/* VS and Score Row */}
        <div className="flex items-center justify-center py-2 border-y border-slate-100 my-1">
          <span className="text-sm font-bold text-slate-400">VS</span>
          {isCompleted && match.homeScore !== undefined && match.awayScore !== undefined && (
            <div className="flex items-center gap-3 ml-3">
              <span className={`text-xl font-bold ${homeWon ? 'text-emerald-600' : 'text-slate-600'}`}>
                {match.homeScore}
              </span>
              <span className="text-sm font-bold text-slate-400">-</span>
              <span className={`text-xl font-bold ${awayWon ? 'text-emerald-600' : 'text-slate-600'}`}>
                {match.awayScore}
              </span>
            </div>
          )}
        </div>

        {/* Away Team Row */}
        <div className={`flex items-center justify-between py-2 ${
          awayWon ? 'bg-gradient-to-r from-emerald-50 to-white px-2 -mx-2 rounded-lg' : ''
        }`}>
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl filter drop-shadow-sm">{match.awayFlag || '⚽'}</span>
            <div className="flex-1 min-w-0">
              <div className={`font-bold text-base truncate leading-tight ${match.awayTeam ? 'text-slate-900' : 'text-slate-400'}`}>
                {match.awayTeam || 'TBD'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Round Column Component
const RoundColumn = ({ matches, title, subtitle }: { matches: BracketMatch[], title: string, subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Round Title */}
      <div className="text-center mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm tracking-tight">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
        )}
      </div>

      {/* Matches Container */}
      <div className="relative">
        {matches.map((match, idx) => {
          const spacing = matches.length === 2 ? 'mt-20 mb-20' : matches.length === 4 ? 'mt-16 mb-16' : 'mt-4 mb-4'

          return (
            <div
              key={match.id}
              className={`relative flex items-center ${spacing}`}
            >
              <MatchCard match={match} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function BracketClient({ lang }: BracketClientProps) {
  const [bracket] = useState<BracketMatch[]>(generateBracket())
  const t = getTranslations(lang)

  // Group matches by round
  const round16Matches = bracket.filter(m => m.round === 'round16')
  const quarterMatches = bracket.filter(m => m.round === 'quarterfinal')
  const semiMatches = bracket.filter(m => m.round === 'semifinal')
  const thirdMatch = bracket.find(m => m.round === 'third')
  const finalMatch = bracket.find(m => m.round === 'final')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🏆</span>
            <div>
              <h1 className="text-4xl font-black tracking-tight leading-none">Tournament Bracket</h1>
              <p className="text-blue-200 text-base font-medium mt-1 tracking-wide">FIFA World Cup 2026™</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Bracket Diagram */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-900/10 p-6 border border-blue-100/50">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-10 min-w-max">
              {/* Round of 16 */}
              <RoundColumn matches={round16Matches} title="Round of 16" subtitle="1/16" />

              {/* Quarter Finals */}
              <RoundColumn matches={quarterMatches} title="Quarter Finals" subtitle="1/8" />

              {/* Semi Finals */}
              <RoundColumn matches={semiMatches} title="Semi Finals" subtitle="1/4" />

              {/* Final & Third Place */}
              <div className="flex flex-col gap-10">
                {/* Third Place */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm tracking-tight">
                      Third Place
                    </div>
                  </div>
                  <div className="relative">
                    <MatchCard match={thirdMatch!} />
                  </div>
                </div>

                {/* Final */}
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm tracking-tight">
                      🏆 Final
                    </div>
                  </div>
                  <div className="relative">
                    <MatchCard match={finalMatch!} />
                    {/* Trophy Icon for Winner */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-5xl filter drop-shadow-lg animate-pulse">
                      🏆
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100/50">
          <h4 className="font-bold text-sm text-slate-800 mb-3">How to Read</h4>
          <div className="flex flex-wrap gap-6 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-300 rounded-lg shadow"></div>
              <span className="font-medium text-slate-700">Winner</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-white border-2 border-slate-300 rounded-lg shadow"></div>
              <span className="font-medium text-slate-700">TBD</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow"></div>
              <span className="font-medium text-slate-700">Final</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
