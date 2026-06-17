// World Cup 2026 Standings Data
// This data should be updated after each match is played
// Format: Group -> Teams with match results

export interface StandingTeam {
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

export interface GroupStanding {
  group: string
  teams: StandingTeam[]
}

// Calculate standings from match results
export function calculateStandings(
  groupTeams: { name: string; slug: string; flag: string }[],
  matchResults: { homeTeam: string; awayTeam: string; homeScore: number; awayScore: number }[]
): StandingTeam[] {
  const teamStats: Record<string, StandingTeam> = {}

  // Initialize teams
  groupTeams.forEach((team, idx) => {
    teamStats[team.name] = {
      rank: idx + 1,
      team: team.name,
      teamSlug: team.slug,
      flag: team.flag,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    }
  })

  // Process match results
  matchResults.forEach((match) => {
    const home = teamStats[match.homeTeam]
    const away = teamStats[match.awayTeam]

    if (!home || !away) return

    home.played++
    away.played++
    home.goalsFor += match.homeScore
    home.goalsAgainst += match.awayScore
    away.goalsFor += match.awayScore
    away.goalsAgainst += match.homeScore

    if (match.homeScore > match.awayScore) {
      home.won++
      home.points += 3
      away.lost++
    } else if (match.homeScore < match.awayScore) {
      away.won++
      away.points += 3
      home.lost++
    } else {
      home.drawn++
      away.drawn++
      home.points++
      away.points++
    }
  })

  // Calculate goal difference
  Object.values(teamStats).forEach((team) => {
    team.goalDifference = team.goalsFor - team.goalsAgainst
  })

  // Sort by points, then goal difference, then goals for
  const sortedTeams = Object.values(teamStats).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
    return b.goalsFor - a.goalsFor
  })

  // Update ranks
  sortedTeams.forEach((team, idx) => {
    team.rank = idx + 1
  })

  return sortedTeams
}

// Match result type
interface MatchResult {
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
}

// Current standings with sample results (can be updated as matches are played)
// These are placeholder results - update after each match day
export const matchResults2026: Record<string, MatchResult> = {
  // Group A - Day 1
  'mexico-south-korea': { homeTeam: 'Mexico', awayTeam: 'South Korea', homeScore: 2, awayScore: 1 },
  'czech-south-africa': { homeTeam: 'Czechia', awayTeam: 'South Africa', homeScore: 1, awayScore: 1 },
  // Group A - Day 2
  'mexico-czech': { homeTeam: 'Mexico', awayTeam: 'Czechia', homeScore: 1, awayScore: 0 },
  'south-africa-south-korea': { homeTeam: 'South Africa', awayTeam: 'South Korea', homeScore: 0, awayScore: 2 },
  // Group A - Day 3
  'south-africa-mexico': { homeTeam: 'South Africa', awayTeam: 'Mexico', homeScore: 1, awayScore: 3 },
  'south-korea-czech': { homeTeam: 'South Korea', awayTeam: 'Czechia', homeScore: 0, awayScore: 1 },

  // Group B - Day 1
  'switzerland-canada': { homeTeam: 'Switzerland', awayTeam: 'Canada', homeScore: 1, awayScore: 0 },
  'qatar-bosnia': { homeTeam: 'Qatar', awayTeam: 'Bosnia-Herzegovina', homeScore: 0, awayScore: 1 },
  // Group B - Day 2
  'switzerland-qatar': { homeTeam: 'Switzerland', awayTeam: 'Qatar', homeScore: 2, awayScore: 0 },
  'bosnia-canada': { homeTeam: 'Bosnia-Herzegovina', awayTeam: 'Canada', homeScore: 1, awayScore: 1 },
  // Group B - Day 3
  'canada-qatar': { homeTeam: 'Canada', awayTeam: 'Qatar', homeScore: 2, awayScore: 1 },
  'bosnia-switzerland': { homeTeam: 'Bosnia-Herzegovina', awayTeam: 'Switzerland', homeScore: 0, awayScore: 2 },

  // Group C - Day 1
  'scotland-morocco': { homeTeam: 'Scotland', awayTeam: 'Morocco', homeScore: 0, awayScore: 1 },
  'brazil-haiti': { homeTeam: 'Brazil', awayTeam: 'Haiti', homeScore: 4, awayScore: 0 },
  // Group C - Day 2
  'scotland-brazil': { homeTeam: 'Scotland', awayTeam: 'Brazil', homeScore: 0, awayScore: 3 },
  'haiti-morocco': { homeTeam: 'Haiti', awayTeam: 'Morocco', homeScore: 0, awayScore: 2 },
  // Group C - Day 3
  'haiti-scotland': { homeTeam: 'Haiti', awayTeam: 'Scotland', homeScore: 1, awayScore: 1 },
  'morocco-brazil': { homeTeam: 'Morocco', awayTeam: 'Brazil', homeScore: 1, awayScore: 1 },

  // Group D - Day 1
  'usa-australia': { homeTeam: 'USA', awayTeam: 'Australia', homeScore: 1, awayScore: 1 },
  'turkey-paraguay': { homeTeam: 'Turkey', awayTeam: 'Paraguay', homeScore: 2, awayScore: 1 },
  // Group D - Day 2
  'usa-turkey': { homeTeam: 'USA', awayTeam: 'Turkey', homeScore: 2, awayScore: 0 },
  'paraguay-australia': { homeTeam: 'Paraguay', awayTeam: 'Australia', homeScore: 1, awayScore: 2 },
  // Group D - Day 3
  'paraguay-usa': { homeTeam: 'Paraguay', awayTeam: 'USA', homeScore: 0, awayScore: 2 },
  'australia-turkey': { homeTeam: 'Australia', awayTeam: 'Turkey', homeScore: 1, awayScore: 0 },

  // Group E - Day 1
  'germany-ivory-coast': { homeTeam: 'Germany', awayTeam: 'Ivory Coast', homeScore: 3, awayScore: 1 },
  'ecuador-curacao': { homeTeam: 'Ecuador', awayTeam: 'Curacao', homeScore: 2, awayScore: 0 },
  // Group E - Day 2
  'germany-ecuador': { homeTeam: 'Germany', awayTeam: 'Ecuador', homeScore: 1, awayScore: 1 },
  'curacao-ivory-coast': { homeTeam: 'Curacao', awayTeam: 'Ivory Coast', homeScore: 0, awayScore: 3 },
  // Group E - Day 3
  'ivory-coast-ecuador': { homeTeam: 'Ivory Coast', awayTeam: 'Ecuador', homeScore: 2, awayScore: 1 },
  'curacao-germany': { homeTeam: 'Curacao', awayTeam: 'Germany', homeScore: 0, awayScore: 4 },

  // Group F - Day 1
  'sweden-japan': { homeTeam: 'Sweden', awayTeam: 'Japan', homeScore: 1, awayScore: 2 },
  'netherlands-tunisia': { homeTeam: 'Netherlands', awayTeam: 'Tunisia', homeScore: 2, awayScore: 0 },
  // Group F - Day 2
  'sweden-netherlands': { homeTeam: 'Sweden', awayTeam: 'Netherlands', homeScore: 0, awayScore: 2 },
  'tunisia-japan': { homeTeam: 'Tunisia', awayTeam: 'Japan', homeScore: 0, awayScore: 1 },
  // Group F - Day 3
  'japan-netherlands': { homeTeam: 'Japan', awayTeam: 'Netherlands', homeScore: 1, awayScore: 1 },
  'tunisia-sweden': { homeTeam: 'Tunisia', awayTeam: 'Sweden', homeScore: 2, awayScore: 1 },

  // Group G - Day 1
  'new-zealand-iran': { homeTeam: 'New Zealand', awayTeam: 'Iran', homeScore: 0, awayScore: 1 },
  'belgium-egypt': { homeTeam: 'Belgium', awayTeam: 'Egypt', homeScore: 2, awayScore: 0 },
  // Group G - Day 2
  'new-zealand-belgium': { homeTeam: 'New Zealand', awayTeam: 'Belgium', homeScore: 0, awayScore: 2 },
  'egypt-iran': { homeTeam: 'Egypt', awayTeam: 'Iran', homeScore: 1, awayScore: 1 },
  // Group G - Day 3
  'iran-belgium': { homeTeam: 'Iran', awayTeam: 'Belgium', homeScore: 0, awayScore: 3 },
  'egypt-new-zealand': { homeTeam: 'Egypt', awayTeam: 'New Zealand', homeScore: 2, awayScore: 0 },

  // Group H - Day 1
  'uruguay-saudi-arabia': { homeTeam: 'Uruguay', awayTeam: 'Saudi Arabia', homeScore: 3, awayScore: 0 },
  'spain-cape-verde': { homeTeam: 'Spain', awayTeam: 'Cabo Verde', homeScore: 4, awayScore: 0 },
  // Group H - Day 2
  'uruguay-spain': { homeTeam: 'Uruguay', awayTeam: 'Spain', homeScore: 1, awayScore: 2 },
  'cape-verde-saudi-arabia': { homeTeam: 'Cabo Verde', awayTeam: 'Saudi Arabia', homeScore: 0, awayScore: 1 },
  // Group H - Day 3
  'saudi-arabia-spain': { homeTeam: 'Saudi Arabia', awayTeam: 'Spain', homeScore: 0, awayScore: 2 },
  'cape-verde-uruguay': { homeTeam: 'Cabo Verde', awayTeam: 'Uruguay', homeScore: 0, awayScore: 3 },

  // Group I - Day 1
  'portugal-senegal': { homeTeam: 'Portugal', awayTeam: 'Senegal', homeScore: 2, awayScore: 1 },
  'norway-iraq': { homeTeam: 'Norway', awayTeam: 'Iraq', homeScore: 1, awayScore: 0 },
  // Group I - Day 2
  'portugal-norway': { homeTeam: 'Portugal', awayTeam: 'Norway', homeScore: 3, awayScore: 0 },
  'iraq-senegal': { homeTeam: 'Iraq', awayTeam: 'Senegal', homeScore: 0, awayScore: 2 },
  // Group I - Day 3
  'senegal-norway': { homeTeam: 'Senegal', awayTeam: 'Norway', homeScore: 1, awayScore: 1 },
  'iraq-portugal': { homeTeam: 'Iraq', awayTeam: 'Portugal', homeScore: 0, awayScore: 4 },

  // Group J - Day 1
  'argentina-algeria': { homeTeam: 'Argentina', awayTeam: 'Algeria', homeScore: 3, awayScore: 0 },
  'austria-jordan': { homeTeam: 'Austria', awayTeam: 'Jordan', homeScore: 2, awayScore: 0 },
  // Group J - Day 2
  'argentina-austria': { homeTeam: 'Argentina', awayTeam: 'Austria', homeScore: 2, awayScore: 0 },
  'jordan-algeria': { homeTeam: 'Jordan', awayTeam: 'Algeria', homeScore: 1, awayScore: 1 },
  // Group J - Day 3
  'algeria-austria': { homeTeam: 'Algeria', awayTeam: 'Austria', homeScore: 0, awayScore: 2 },
  'jordan-argentina': { homeTeam: 'Jordan', awayTeam: 'Argentina', homeScore: 0, awayScore: 4 },

  // Group K - Day 1
  'france-dr-congo': { homeTeam: 'France', awayTeam: 'DR Congo', homeScore: 4, awayScore: 0 },
  'uzbekistan-colombia': { homeTeam: 'Uzbekistan', awayTeam: 'Colombia', homeScore: 0, awayScore: 2 },
  // Group K - Day 2
  'france-uzbekistan': { homeTeam: 'France', awayTeam: 'Uzbekistan', homeScore: 3, awayScore: 0 },
  'colombia-dr-congo': { homeTeam: 'Colombia', awayTeam: 'DR Congo', homeScore: 3, awayScore: 1 },
  // Group K - Day 3
  'dr-congo-uzbekistan': { homeTeam: 'DR Congo', awayTeam: 'Uzbekistan', homeScore: 1, awayScore: 1 },
  'colombia-france': { homeTeam: 'Colombia', awayTeam: 'France', homeScore: 0, awayScore: 1 },

  // Group L - Day 1
  'england-croatia': { homeTeam: 'England', awayTeam: 'Croatia', homeScore: 1, awayScore: 1 },
  'ghana-panama': { homeTeam: 'Ghana', awayTeam: 'Panama', homeScore: 2, awayScore: 1 },
  // Group L - Day 2
  'england-ghana': { homeTeam: 'England', awayTeam: 'Ghana', homeScore: 2, awayScore: 0 },
  'panama-croatia': { homeTeam: 'Panama', awayTeam: 'Croatia', homeScore: 0, awayScore: 2 },
  // Group L - Day 3
  'croatia-ghana': { homeTeam: 'Croatia', awayTeam: 'Ghana', homeScore: 1, awayScore: 0 },
  'panama-england': { homeTeam: 'Panama', awayTeam: 'England', homeScore: 0, awayScore: 3 },
}

// All match results flattened
export const allMatchResults = Object.values(matchResults2026)

// Group team definitions
const groupTeams2026: Record<string, { name: string; slug: string; flag: string }[]> = {
  A: [
    { name: 'Mexico', slug: 'mexico', flag: '🇲🇽' },
    { name: 'South Korea', slug: 'south-korea', flag: '🇰🇷' },
    { name: 'Czechia', slug: 'czech', flag: '🇨🇿' },
    { name: 'South Africa', slug: 'south-africa', flag: '🇿🇦' },
  ],
  B: [
    { name: 'Switzerland', slug: 'switzerland', flag: '🇨🇭' },
    { name: 'Canada', slug: 'canada', flag: '🇨🇦' },
    { name: 'Qatar', slug: 'qatar', flag: '🇶🇦' },
    { name: 'Bosnia-Herzegovina', slug: 'bosnia', flag: '🇧🇦' },
  ],
  C: [
    { name: 'Scotland', slug: 'scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { name: 'Morocco', slug: 'morocco', flag: '🇲🇦' },
    { name: 'Brazil', slug: 'brazil', flag: '🇧🇷' },
    { name: 'Haiti', slug: 'haiti', flag: '🇭🇹' },
  ],
  D: [
    { name: 'USA', slug: 'usa', flag: '🇺🇸' },
    { name: 'Australia', slug: 'australia', flag: '🇦🇺' },
    { name: 'Turkey', slug: 'turkey', flag: '🇹🇷' },
    { name: 'Paraguay', slug: 'paraguay', flag: '🇵🇾' },
  ],
  E: [
    { name: 'Germany', slug: 'germany', flag: '🇩🇪' },
    { name: 'Ivory Coast', slug: 'ivory-coast', flag: '🇨🇮' },
    { name: 'Ecuador', slug: 'ecuador', flag: '🇪🇨' },
    { name: 'Curacao', slug: 'curacao', flag: '🇨🇼' },
  ],
  F: [
    { name: 'Sweden', slug: 'sweden', flag: '🇸🇪' },
    { name: 'Japan', slug: 'japan', flag: '🇯🇵' },
    { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱' },
    { name: 'Tunisia', slug: 'tunisia', flag: '🇹🇳' },
  ],
  G: [
    { name: 'New Zealand', slug: 'new-zealand', flag: '🇳🇿' },
    { name: 'Iran', slug: 'iran', flag: '🇮🇷' },
    { name: 'Belgium', slug: 'belgium', flag: '🇧🇪' },
    { name: 'Egypt', slug: 'egypt', flag: '🇪🇬' },
  ],
  H: [
    { name: 'Uruguay', slug: 'uruguay', flag: '🇺🇾' },
    { name: 'Saudi Arabia', slug: 'saudi-arabia', flag: '🇸🇦' },
    { name: 'Spain', slug: 'spain', flag: '🇪🇸' },
    { name: 'Cabo Verde', slug: 'cape-verde', flag: '🇨🇻' },
  ],
  I: [
    { name: 'Portugal', slug: 'portugal', flag: '🇵🇹' },
    { name: 'Senegal', slug: 'senegal', flag: '🇸🇳' },
    { name: 'Norway', slug: 'norway', flag: '🇳🇴' },
    { name: 'Iraq', slug: 'iraq', flag: '🇮🇶' },
  ],
  J: [
    { name: 'Argentina', slug: 'argentina', flag: '🇦🇷' },
    { name: 'Algeria', slug: 'algeria', flag: '🇩🇿' },
    { name: 'Austria', slug: 'austria', flag: '🇦🇹' },
    { name: 'Jordan', slug: 'jordan', flag: '🇯🇴' },
  ],
  K: [
    { name: 'France', slug: 'france', flag: '🇫🇷' },
    { name: 'DR Congo', slug: 'dr-congo', flag: '🇨🇩' },
    { name: 'Uzbekistan', slug: 'uzbekistan', flag: '🇺🇿' },
    { name: 'Colombia', slug: 'colombia', flag: '🇨🇴' },
  ],
  L: [
    { name: 'England', slug: 'england', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { name: 'Croatia', slug: 'croatia', flag: '🇭🇷' },
    { name: 'Ghana', slug: 'ghana', flag: '🇬🇭' },
    { name: 'Panama', slug: 'panama', flag: '🇵🇦' },
  ],
}

// Generate standings for all groups
export function generateAllStandings(): GroupStanding[] {
  const groups: GroupStanding[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((group) => {
    const teams = groupTeams2026[group]
    const groupMatches = allMatchResults.filter(
      (m) => teams.some((t) => t.name === m.homeTeam) && teams.some((t) => t.name === m.awayTeam)
    )
    const standings = calculateStandings(teams, groupMatches)
    return { group, teams: standings }
  })

  return groups
}

// Export pre-calculated standings
export const standings2026 = generateAllStandings()
