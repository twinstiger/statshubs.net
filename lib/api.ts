// lib/api.ts - Football-data.org API 集成

const API_KEY = process.env.FOOTBALL_API_KEY || 'YOUR_API_KEY_HERE'
const BASE_URL = 'https://api.football-data.org/v4'

// 可用端点
// GET /competitions/{id}          - 赛事信息
// GET /competitions/{id}/matches - 赛事赛程
// GET /matches/{id}              - 比赛详情
// GET /teams/{id}                - 球队信息
// GET /standings                 - 积分榜

export interface Match {
  id: number
  utcDate: string
  status: 'SCHEDULED' | 'IN_PLAY' | 'FINISHED' | 'PAUSED'
  matchday: number
  stage: string
  group?: string
  homeTeam: { id: number; shortName: string; name: string }
  awayTeam: { id: number; shortName: string; name: string }
  score: {
    fullTime: { home: number; away: number }
    halfTime: { home: number; away: number }
  }
  venue?: string
}

export interface Standing {
  competition: string
  standings: Array<{
    stage: string
    type: string
    table: Array<{
      position: number
      team: { id: number; shortName: string; name: string }
      playedGames: number
      won: number
      drawn: number
      lost: number
      points: number
      goalsFor: number
      goalsAgainst: number
      goalDifference: number
    }>
  }>
}

// 获取世界杯赛事信息 (FIFA World Cup competition ID: 2001)
export async function getWorldCupInfo() {
  const res = await fetch(`${BASE_URL}/competitions/2001`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// 获取世界杯赛程
export async function getWorldCupMatches(season: number = 2026) {
  const res = await fetch(`${BASE_URL}/competitions/2001/matches?season=${season}`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// 获取积分榜
export async function getWorldCupStandings(season: number = 2026) {
  const res = await fetch(`${BASE_URL}/competitions/2001/standings?season=${season}`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// 获取球队详情
export async function getTeam(teamId: number) {
  const res = await fetch(`${BASE_URL}/teams/${teamId}`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// 获取球队赛程
export async function getTeamMatches(teamId: number) {
  const res = await fetch(`${BASE_URL}/teams/${teamId}/matches`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// 获取单场比赛详情
export async function getMatch(matchId: number) {
  const res = await fetch(`${BASE_URL}/matches/${matchId}`, {
    headers: { 'X-Auth-Token': API_KEY }
  })
  return res.json()
}

// ============ 兼容现有数据格式 ============

// 将API数据转换为项目使用的格式
export function transformMatch(apiMatch: Match) {
  return {
    id: String(apiMatch.id),
    date: apiMatch.utcDate.split('T')[0],
    time: apiMatch.utcDate.split('T')[1]?.substring(0, 5) || '00:00',
    homeTeam: apiMatch.homeTeam.shortName,
    awayTeam: apiMatch.awayTeam.shortName,
    homeScore: apiMatch.score.fullTime.home,
    awayScore: apiMatch.score.fullTime.away,
    venue: apiMatch.venue || 'TBD',
    city: 'TBD',
    group: apiMatch.group || undefined,
    stage: mapStage(apiMatch.stage),
    status: mapStatus(apiMatch.status),
  }
}

function mapStage(stage: string): 'group' | 'round16' | 'quarter' | 'semi' | 'third' | 'final' {
  const stageMap: Record<string, any> = {
    'GROUP_STAGE': 'group',
    'ROUND_OF_16': 'round16',
    'QUARTER_FINALS': 'quarter',
    'SEMIFINALS': 'semi',
    'THIRD_PLACE': 'third',
    'FINAL': 'final',
  }
  return stageMap[stage] || 'group'
}

function mapStatus(status: string): 'scheduled' | 'live' | 'finished' {
  const statusMap: Record<string, any> = {
    'SCHEDULED': 'scheduled',
    'IN_PLAY': 'live',
    'PAUSED': 'live',
    'FINISHED': 'finished',
  }
  return statusMap[status] || 'scheduled'
}

// 获取今日比赛
export async function getTodayMatches() {
  const today = new Date().toISOString().split('T')[0]
  const res = await fetch(
    `${BASE_URL}/matches?date=${today}&competitions=2001`,
    { headers: { 'X-Auth-Token': API_KEY } }
  )
  const data = await res.json()
  return (data.matches || []).map(transformMatch)
}
