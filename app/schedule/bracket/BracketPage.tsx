'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { matches, teams, standings } from '@/lib/data'
import { matchResults2026 } from '@/data/standings'

// Types
interface TeamInfo {
  name: string
  slug: string
  flag: string
  group: string
  association: string
}

interface BracketTeam {
  team?: TeamInfo
  bye?: boolean
}

interface BracketMatch {
  id: string
  round: string
  home: BracketTeam
  away: BracketTeam
  score?: { home?: number; away?: number }
  winner?: 'home' | 'away'
  date?: string
  venue?: string
}

// Get match result by team names
const getMatchResult = (homeTeam: string, awayTeam: string) => {
  const key = `${homeTeam.toLowerCase().replace(/ /g, '-')}-${awayTeam.toLowerCase().replace(/ /g, '-')}`
  return matchResults2026[key]
}

// Get winner based on match result
const getWinner = (homeTeam: string, awayTeam: string): 'home' | 'away' | undefined => {
  const result = getMatchResult(homeTeam, awayTeam)
  if (!result) return undefined
  if (result.homeScore > result.awayScore) return 'home'
  if (result.homeScore < result.awayScore) return 'away'
  return undefined
}

// Check if match is completed
const isMatchCompleted = (homeTeam: string, awayTeam: string): boolean => {
  return getMatchResult(homeTeam, awayTeam) !== undefined
}

// Get score for a team in a match
const getTeamScore = (homeTeam: string, awayTeam: string, position: 'home' | 'away'): number | undefined => {
  const result = getMatchResult(homeTeam, awayTeam)
  if (!result) return undefined
  return position === 'home' ? result.homeScore : result.awayScore
}

// Get team info by name
const getTeamInfo = (teamName: string): TeamInfo | undefined => {
  const team = teams.find(t => t.name === teamName)
  if (!team) return undefined

  const associationMap: Record<string, string> = {
    'A': 'CONCACAF', 'B': 'CONCACAF', 'C': 'UEFA', 'D': 'CONCACAF',
    'E': 'UEFA', 'F': 'UEFA', 'G': 'UEFA', 'H': 'CONMEBOL',
    'I': 'UEFA', 'J': 'CONMEBOL', 'K': 'UEFA', 'L': 'UEFA'
  }

  return {
    name: team.name,
    slug: team.slug,
    flag: team.flag,
    group: team.group,
    association: associationMap[team.group] || 'FIFA'
  }
}

// Get group stage stats for a team
const getGroupStats = (teamName: string) => {
  const team = teams.find(t => t.name === teamName)
  if (!team) return null
  const groupStandings = standings.find(s => s.group === team.group)
  if (!groupStandings) return null
  const teamStanding = groupStandings.teams.find(t => t.team === teamName)
  return teamStanding || null
}

// Match Row Component - Scores below VS
const MatchRow = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  isHomeWinner,
  isAwayWinner,
  matchCompleted
}: {
  homeTeam?: TeamInfo
  awayTeam?: TeamInfo
  homeScore?: number
  awayScore?: number
  isHomeWinner?: boolean
  isAwayWinner?: boolean
  matchCompleted?: boolean
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Home Team */}
      <div className="flex-1">
        {homeTeam ? (
          <div className={`
            h-14 flex items-center px-4 border-2 rounded-lg cursor-pointer transition-all
            ${isHomeWinner ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-lg' : ''}
            ${isAwayWinner ? 'bg-slate-50 border-slate-200 opacity-60' : ''}
            ${!isHomeWinner && !isAwayWinner ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg' : ''}
          `}
          onClick={() => window.open(`/tools/teams/${homeTeam.slug}`, '_blank')}>
            <span className="text-2xl mr-3">{homeTeam.flag}</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate leading-tight">{homeTeam.name}</p>
            </div>
          </div>
        ) : (
          <div className="h-14 flex items-center px-4 bg-white border-2 border-dashed border-slate-300 rounded-lg text-slate-400 font-bold text-sm">
            待定
          </div>
        )}
      </div>

      {/* VS and Score */}
      <div className="flex flex-col items-center px-3">
        <span className="text-sm font-bold text-slate-400">VS</span>
        {matchCompleted && homeScore !== undefined && awayScore !== undefined && (
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${isHomeWinner ? 'text-emerald-600' : 'text-slate-600'}`}>
              {homeScore}
            </span>
            <span className="text-sm font-bold text-slate-400">-</span>
            <span className={`text-lg font-bold ${isAwayWinner ? 'text-emerald-600' : 'text-slate-600'}`}>
              {awayScore}
            </span>
          </div>
        )}
      </div>

      {/* Away Team */}
      <div className="flex-1">
        {awayTeam ? (
          <div className={`
            h-14 flex items-center px-4 border-2 rounded-lg cursor-pointer transition-all
            ${isAwayWinner ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-lg' : ''}
            ${isHomeWinner ? 'bg-slate-50 border-slate-200 opacity-60' : ''}
            ${!isHomeWinner && !isAwayWinner ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg' : ''}
          `}
          onClick={() => window.open(`/tools/teams/${awayTeam.slug}`, '_blank')}>
            <div className="flex-1 min-w-0 text-right">
              <p className="font-bold text-sm truncate leading-tight">{awayTeam.name}</p>
            </div>
            <span className="text-2xl ml-3">{awayTeam.flag}</span>
          </div>
        ) : (
          <div className="h-14 flex items-center px-4 bg-white border-2 border-dashed border-slate-300 rounded-lg text-slate-400 font-bold text-sm">
            待定
          </div>
        )}
      </div>
    </div>
  )
}

// Team Cell Component - Without Scores
const TeamCell = ({
  team,
  bye = false,
  isWinner = false,
  isLoser = false,
}: {
  team?: TeamInfo
  bye?: boolean
  isWinner?: boolean
  isLoser?: boolean
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const cellRef = useRef<HTMLDivElement>(null)
  const groupStats = team ? getGroupStats(team.name) : null

  const handleMouseEnter = () => {
    if (cellRef.current && team) {
      const rect = cellRef.current.getBoundingClientRect()
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top
      })
      setShowTooltip(true)
    }
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  if (bye) {
    return (
      <div className="h-14 flex items-center px-4 bg-slate-100 border-2 border-slate-200 rounded-lg text-slate-400 font-bold text-sm">
        BYE
      </div>
    )
  }

  if (!team) {
    return (
      <div className="h-14 flex items-center px-4 bg-white border-2 border-dashed border-slate-300 rounded-lg text-slate-400 font-bold text-sm">
        待定
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        ref={cellRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          h-14 flex items-center px-4 border-2 rounded-lg cursor-pointer transition-all
          ${isWinner ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-lg' : ''}
          ${isLoser ? 'bg-slate-50 border-slate-200 opacity-60' : ''}
          ${!isWinner && !isLoser ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg' : ''}
        `}
        onClick={() => window.open(`/tools/teams/${team.slug}`, '_blank')}
      >
        {/* Team Flag */}
        <span className="text-2xl mr-3">{team.flag}</span>

        {/* Team Info */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate leading-tight">{team.name}</p>
        </div>

        {/* Winner Indicator */}
        {isWinner && (
          <span className="text-emerald-500 text-lg ml-2">✓</span>
        )}
      </div>

      {/* Tooltip */}
      {showTooltip && groupStats && (
        <div
          className="fixed z-50 bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 w-72 transform -translate-x-1/2 -translate-y-full mt-[-8px]"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">{team.flag}</span>
            <div>
              <p className="font-black text-lg">{team.name}</p>
              <p className="text-sm text-slate-500 font-semibold">Group {team.group}</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Matches:</span>
                <span className="font-bold">{groupStats.played}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Wins:</span>
                <span className="font-bold text-emerald-600">{groupStats.won}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Draws:</span>
                <span className="font-bold text-slate-600">{groupStats.drawn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Losses:</span>
                <span className="font-bold text-red-600">{groupStats.lost}</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Goals For:</span>
                <span className="font-bold">{groupStats.goalsFor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Goals Against:</span>
                <span className="font-bold">{groupStats.goalsAgainst}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Goal Diff:</span>
                <span className={`font-bold ${groupStats.goalDifference > 0 ? 'text-emerald-600' : groupStats.goalDifference < 0 ? 'text-red-600' : ''}`}>
                  {groupStats.goalDifference > 0 ? '+' : ''}{groupStats.goalDifference}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-bold">Total Points:</span>
                <span className="text-2xl font-black text-blue-600">{groupStats.points}</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
            <div className="w-4 h-4 bg-white border-r border-b border-slate-200 rotate-45 transform -translate-y-2"></div>
          </div>
        </div>
      )}
    </div>
  )
}

// Main Bracket Page Component - Spacious Version
export default function BracketPage() {
  const [legendItems] = useState<{color: string; label: string}[]>([
    { color: 'bg-emerald-100 border-emerald-400', label: 'Advancing Team' },
    { color: 'bg-slate-100 border-slate-200', label: 'TBD' },
  ])

  // Generate mock bracket data with scores from actual results
  const upperBracket: BracketMatch[] = [
    { id: 'r16-1', round: 'round16', home: { team: getTeamInfo('Mexico') }, away: { team: getTeamInfo('South Korea') } },
    { id: 'r16-2', round: 'round16', home: { team: getTeamInfo('Brazil') }, away: { team: getTeamInfo('Haiti') } },
    { id: 'r16-3', round: 'round16', home: { team: getTeamInfo('Germany') }, away: { team: getTeamInfo('Ecuador') } },
    { id: 'r16-4', round: 'round16', home: { team: getTeamInfo('Argentina') }, away: { team: getTeamInfo('Algeria') } },
    { id: 'r16-5', round: 'round16', home: { team: getTeamInfo('Spain') }, away: { team: getTeamInfo('Cabo Verde') } },
    { id: 'r16-6', round: 'round16', home: { team: getTeamInfo('Portugal') }, away: { team: getTeamInfo('Iraq') } },
    { id: 'r16-7', round: 'round16', home: { team: getTeamInfo('France') }, away: { team: getTeamInfo('DR Congo') } },
    { id: 'r16-8', round: 'round16', home: { team: getTeamInfo('England') }, away: { team: getTeamInfo('Ghana') } },
  ].map(match => {
    if (match.home.team && match.away.team && isMatchCompleted(match.home.team.name, match.away.team.name)) {
      const homeScore = getTeamScore(match.home.team.name, match.away.team.name, 'home')
      const awayScore = getTeamScore(match.home.team.name, match.away.team.name, 'away')
      const winner = getWinner(match.home.team.name, match.away.team.name)
      return { ...match, score: { home: homeScore, away: awayScore }, winner }
    }
    return match
  })

  const lowerBracket: BracketMatch[] = [
    { id: 'r16-9', round: 'round16', home: { team: getTeamInfo('South Korea') }, away: { team: getTeamInfo('USA') } },
    { id: 'r16-10', round: 'round16', home: { team: getTeamInfo('Morocco') }, away: { team: getTeamInfo('Scotland') } },
    { id: 'r16-11', round: 'round16', home: { team: getTeamInfo('Netherlands') }, away: { team: getTeamInfo('Japan') } },
    { id: 'r16-12', round: 'round16', home: { team: getTeamInfo('Belgium') }, away: { team: getTeamInfo('Egypt') } },
    { id: 'r16-13', round: 'round16', home: { team: getTeamInfo('Uruguay') }, away: { team: getTeamInfo('Saudi Arabia') } },
    { id: 'r16-14', round: 'round16', home: { team: getTeamInfo('Senegal') }, away: { team: getTeamInfo('Norway') } },
    { id: 'r16-15', round: 'round16', home: { team: getTeamInfo('Croatia') }, away: { team: getTeamInfo('Panama') } },
    { id: 'r16-16', round: 'round16', home: { team: getTeamInfo('Italy') }, away: { team: getTeamInfo('Austria') } },
  ].map(match => {
    if (match.home.team && match.away.team && isMatchCompleted(match.home.team.name, match.away.team.name)) {
      const homeScore = getTeamScore(match.home.team.name, match.away.team.name, 'home')
      const awayScore = getTeamScore(match.home.team.name, match.away.team.name, 'away')
      const winner = getWinner(match.home.team.name, match.away.team.name)
      return { ...match, score: { home: homeScore, away: awayScore }, winner }
    }
    return match
  })

  const upperQuarter: BracketMatch[] = [
    { id: 'qf-1', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-2', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-3', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-4', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
  ]

  const lowerQuarter: BracketMatch[] = [
    { id: 'qf-5', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-6', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-7', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'qf-8', round: 'quarterfinal', home: { team: undefined }, away: { team: undefined } },
  ]

  const upperSemis: BracketMatch[] = [
    { id: 'sf-1', round: 'semifinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'sf-2', round: 'semifinal', home: { team: undefined }, away: { team: undefined } },
  ]

  const lowerSemis: BracketMatch[] = [
    { id: 'sf-3', round: 'semifinal', home: { team: undefined }, away: { team: undefined } },
    { id: 'sf-4', round: 'semifinal', home: { team: undefined }, away: { team: undefined } },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4 py-5">
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl">🏆</span>
              <h1 className="text-3xl font-black tracking-tight">FIFA World Cup 2026™</h1>
              <span className="text-3xl">🏆</span>
            </div>
            <p className="text-blue-200 text-base font-medium tracking-wide">淘汰赛对阵图 / Knockout Stage</p>
          </div>
        </div>
      </div>

      {/* Bracket Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="flex gap-12 items-start overflow-x-auto pb-8">

            {/* Left Side - Upper Bracket */}
            <div className="flex flex-col">
              {/* Section Label */}
              <div className="text-center mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-xs font-bold shadow-lg">
                  上半区 Upper
                </span>
              </div>

              {/* Round of 16 */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-lg mb-3 border border-blue-200">
                  1/16决赛
                </h4>
                <div className="space-y-3">
                  {upperBracket.slice(0, 4).map((match) => (
                    <div key={match.id} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 w-8">{match.id.split('-')[1]}</span>
                      <MatchRow
                        homeTeam={match.home.team}
                        awayTeam={match.away.team}
                        homeScore={match.score?.home}
                        awayScore={match.score?.away}
                        isHomeWinner={match.winner === 'home'}
                        isAwayWinner={match.winner === 'away'}
                        matchCompleted={match.score !== undefined}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quarterfinals */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-lg mb-3 border border-amber-200">
                  1/4决赛
                </h4>
                <div className="space-y-6">
                  {upperQuarter.slice(0, 2).map((match) => (
                    <MatchRow
                      key={match.id}
                      homeTeam={match.home.team}
                      awayTeam={match.away.team}
                      homeScore={match.score?.home}
                      awayScore={match.score?.away}
                      isHomeWinner={match.winner === 'home'}
                      isAwayWinner={match.winner === 'away'}
                      matchCompleted={match.score !== undefined}
                    />
                  ))}
                </div>
              </div>

              {/* Semifinal */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg mb-3 border border-purple-200">
                  半决赛
                </h4>
                <div className="space-y-6">
                  {upperSemis.slice(0, 1).map((match) => (
                    <MatchRow
                      key={match.id}
                      homeTeam={match.home.team}
                      awayTeam={match.away.team}
                      homeScore={match.score?.home}
                      awayScore={match.score?.away}
                      isHomeWinner={match.winner === 'home'}
                      isAwayWinner={match.winner === 'away'}
                      matchCompleted={match.score !== undefined}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center - Champion & Finals */}
            <div className="flex flex-col items-center px-6">
              {/* Champion Display */}
              <div className="mb-8">
                <div className="w-36 h-36 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-100 via-yellow-200 to-amber-200 flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-4xl mb-1">🏆</span>
                  <span className="text-xs font-black text-yellow-800">CHAMPION</span>
                  <span className="text-2xl mt-1">🏆</span>
                </div>
              </div>

              {/* Third Place */}
              <div className="mt-10">
                <h4 className="text-xs font-bold text-slate-600 text-center mb-3 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-lg border border-amber-200">
                  季军
                </h4>
                <div className="space-y-3">
                  <TeamCell team={undefined} />
                  <TeamCell team={undefined} />
                </div>
              </div>
            </div>

            {/* Right Side - Lower Bracket */}
            <div className="flex flex-col">
              {/* Section Label */}
              <div className="text-center mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg text-xs font-bold shadow-lg">
                  下半区 Lower
                </span>
              </div>

              {/* Round of 16 */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-lg mb-3 border border-blue-200">
                  1/16决赛
                </h4>
                <div className="space-y-3">
                  {lowerBracket.slice(0, 4).map((match) => (
                    <div key={match.id} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 w-8">{match.id.split('-')[1]}</span>
                      <MatchRow
                        homeTeam={match.home.team}
                        awayTeam={match.away.team}
                        homeScore={match.score?.home}
                        awayScore={match.score?.away}
                        isHomeWinner={match.winner === 'home'}
                        isAwayWinner={match.winner === 'away'}
                        matchCompleted={match.score !== undefined}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quarterfinals */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-lg mb-3 border border-amber-200">
                  1/4决赛
                </h4>
                <div className="space-y-6">
                  {lowerQuarter.slice(0, 2).map((match) => (
                    <MatchRow
                      key={match.id}
                      homeTeam={match.home.team}
                      awayTeam={match.away.team}
                      homeScore={match.score?.home}
                      awayScore={match.score?.away}
                      isHomeWinner={match.winner === 'home'}
                      isAwayWinner={match.winner === 'away'}
                      matchCompleted={match.score !== undefined}
                    />
                  ))}
                </div>
              </div>

              {/* Semifinal */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 text-center bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-lg mb-3 border border-purple-200">
                  半决赛
                </h4>
                <div className="space-y-6">
                  {lowerSemis.slice(0, 1).map((match) => (
                    <MatchRow
                      key={match.id}
                      homeTeam={match.home.team}
                      awayTeam={match.away.team}
                      homeScore={match.score?.home}
                      awayScore={match.score?.away}
                      isHomeWinner={match.winner === 'home'}
                      isAwayWinner={match.winner === 'away'}
                      matchCompleted={match.score !== undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend Section */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100/50">
          <h3 className="text-sm font-bold text-slate-800 mb-3">图例 Legend</h3>
          <div className="flex flex-wrap gap-6 text-xs">
            {legendItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-6 h-6 border-2 rounded-lg shadow ${item.color}`}></div>
                <span className="font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-dashed border-slate-300 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-500 font-bold">BYE</div>
              <span className="font-medium text-slate-700">轮空</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold">2</span>
                <span className="text-base font-bold text-slate-400">-</span>
                <span className="text-xl font-bold text-slate-400">1</span>
              </div>
              <span className="font-medium text-slate-700">比分显示在VS下方</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
            <div className="flex flex-wrap gap-4">
              <p>💡 点击球队可查看详情 | Click to view team details</p>
              <p>💡 鼠标悬浮查看小组赛统计 | Hover for group stats</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/schedule" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-bold text-sm shadow-lg hover:shadow-xl">
            📅 赛程表
          </Link>
          <Link href="/tools/standings" className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 transition-all font-bold text-sm shadow-lg">
            📊 积分榜
          </Link>
          <Link href="/tools/teams" className="px-4 py-2 bg-white border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-blue-300 transition-all font-bold text-sm shadow-lg">
            👥 球队
          </Link>
        </div>
      </div>
    </div>
  )
}
