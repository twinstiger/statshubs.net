import { Metadata } from 'next'

// 多语言 hreflang 配置
export const alternates: Metadata['alternates'] = {
  canonical: 'https://statshubs.net',
  languages: {
    'en-US': 'https://statshubs.net',
    'es-ES': 'https://statshubs.net/es',
    'fr-FR': 'https://statshubs.net/fr',
    'de-DE': 'https://statshubs.net/de',
    'pt-BR': 'https://statshubs.net/pt',
    'ja-JP': 'https://statshubs.net/ja',
  },
}

// 多语言关键词 - 基于 Google Trends 热门搜索
export const multilingualKeywords = [
  // 核心关键词
  'World Cup 2026',
  'FIFA World Cup 2026',
  // 西班牙语
  'Copa Mundial 2026',
  'Copa Mundial de la FIFA 2026',
  'copa do mundo 2026',
  // 法语
  'Coupe du Monde 2026',
  'Coupe du Monde de la FIFA 2026',
  // 德语
  'FIFA Fußball Weltmeisterschaft 2026',
  'Fuβball Weltmeisterschaft 2026',
  // 日语
  'FIFA ワールド カップ 2026',
  'ワールドカップ 2026',
  // 热门搜索词
  'brazil vs morocco',
  'cabo verde',
  'españa cabo verde',
  'argentina world cup 2026',
  'brazil world cup 2026',
  // 工具相关
  'time zone converter',
  'bracket maker',
  'world cup schedule',
  'world cup standings',
  'world cup fixtures',
  'world cup teams',
  'world cup squads'
]

// 多语言页面标题
export const multilingualTitles = {
  home: 'World Cup 2026 Tool Hub | Copa Mundial | Coupe du Monde | FIFA ワールドカップ',
  schedule: 'World Cup 2026 Schedule | Copa Mundial Fixtures | Match Times',
  standings: 'World Cup 2026 Standings | Group Tables | Copa Mundial Rankings',
  bracket: 'World Cup 2026 Bracket | Predict Winners | Coupe du Monde',
  timezone: 'World Cup 2026 Time Zone Converter | Copa Mundial Times',
  teams: 'World Cup 2026 Teams | All 48 Squads | Copa Mundial',
  news: 'World Cup 2026 News | Copa Mundial Updates | Live Analysis',
}

// 多语言描述
export const multilingualDescriptions = {
  home: 'Your ultimate FIFA World Cup 2026 companion. Copa Mundial 2026, Coupe du Monde 2026, FIFA Fußball Weltmeisterschaft 2026. Timezone converter, bracket maker, live standings, printable schedules. Free tools worldwide.',
  schedule: 'Complete FIFA World Cup 2026 schedule with Copa Mundial 2026 match times in all time zones. Download printable fixtures for Coupe du Monde 2026.',
  standings: 'Live World Cup 2026 group standings and rankings. Copa Mundial 2026 tables with points, goal difference, and advancement scenarios.',
  bracket: 'Create your FIFA World Cup 2026 predictions and bracket. Copa Mundial bracket maker with real-time updates for Coupe du Monde 2026.',
  timezone: 'Convert FIFA World Cup 2026 match times to your local timezone. Copa Mundial 2026 kickoff times worldwide.',
  teams: 'All 48 World Cup 2026 teams with full squad lists. Copa Mundial 2026 team profiles, players, and statistics.',
  news: 'Latest FIFA World Cup 2026 news and Copa Mundial 2026 analysis. Match previews, team updates, and live coverage.',
}
