// Player statistics interface
export interface Player {
  age: number
  assists: number
  attPenGoal: number
  goals: number
  height: number
  logo: string
  nameEn: string
  nameZh: string
  nationality: string
  playerId: number
  redCards: number
  shirtNumber: string
  weight: number
  yellowCards: number
}

export interface TeamSquad {
  back: Player[]
  forward: Player[]
  goalkeeper: Player[]
  manager: {
    logo: string
    nameEn: string
    nameZh: string
    playerId: number
  }
  midfield: Player[]
}

// Team API URL pattern - using 163.com API
export const getTeamApiUrl = (teamId: number): string => {
  return `https://gw.m.163.com/base/worldCup/qatar/teamLineupInfo?teamId=${teamId}`
}

// Team IDs from 163.com API
export const teamIds: Record<string, number> = {
  // Group A
  'mexico': 11764,
  'south-korea': 10586,
  'czech': 10979,
  'south-africa': 10310,
  // Group B
  'switzerland': 10871,
  'canada': 11138,
  'qatar': 11289,
  'bosnia': 10478,
  // Group C
  'scotland': 10868,
  'morocco': 11763,
  'brazil': 10477,
  'haiti': 11089,
  // Group D
  'usa': 13611,
  'australia': 13832,
  'turkey': 13337,
  'paraguay': 13449,
  // Group E
  'germany': 11746,
  'ivory-coast': 11141,
  'ecuador': 11082,
  'curacao': 33203,
  // Group F
  'sweden': 10869,
  'japan': 14529,
  'netherlands': 10870,
  'tunisia': 13613,
  // Group G
  'new-zealand': 14400,
  'iran': 14298,
  'belgium': 10316,
  'egypt': 13464,
  // Group H
  'uruguay': 13447,
  'saudi-arabia': 10584,
  'spain': 14227,
  'cape-verde': 11083,
  // Group I
  'france': 13365,
  'senegal': 13365,
  'iraq': 11288,
  'norway': 13820,
  // Group J
  'argentina': 11747,
  'algeria': 23383,
  'austria': 13226,
  'jordan': 11267,
  // Group K
  'portugal': 13152,
  'dr-congo': 11142,
  'uzbekistan': 10582,
  'colombia': 10476,
  // Group L
  'england': 11079,
  'croatia': 11606,
  'ghana': 11017,
  'panama': 12064,
}

// Reverse lookup - find team slug by ID
export const getTeamById = (teamId: number): string | undefined => {
  return Object.entries(teamIds).find(([_, id]) => id === teamId)?.[0]
}

// Get all team IDs for batch fetching
export const getAllTeamIds = (): number[] => {
  return [...new Set(Object.values(teamIds))]
}
