// World Cup 2026 Data Models

export interface Team {
  slug: string;
  name: string;
  flag: string;
  group: string;
  manager: string;
  ranking: number;
  squad: Player[];
  history: {
    appearances: number;
    bestResult: string;
    titles: number;
  };
  odds?: number;
  injuries?: string[];
}

export interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  number: number;
  club: string;
  value?: string;
  goals?: number;
  caps?: number;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
  city: string;
  group?: string;
  stage: 'group' | 'round16' | 'quarter' | 'semi' | 'third' | 'final';
  status: 'scheduled' | 'live' | 'finished';
  minute?: number;
}

export interface Standing {
  group: string;
  teams: StandingTeam[];
}

export interface StandingTeam {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'preview' | 'analysis' | 'guide' | 'recap' | 'fan';
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  tags: string[];
  readTime: number;
}

export interface BracketData {
  groups: Record<string, {
    first: string;
    second: string;
    bestThird: string[];
  }>;
  round16: Match[];
  quarter: Match[];
  semi: Match[];
  final: Match;
  thirdPlace: Match;
}

export type Timezone = {
  value: string;
  label: string;
  offset: string;
}
