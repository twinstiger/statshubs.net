import { Metadata } from 'next'
import StandingsClient from './StandingsClient'

export const metadata: Metadata = {
  title: 'World Cup 2026 Standings | Group Tables | Copa Mundial Rankings',
  description: 'Live World Cup 2026 group standings and rankings. Copa Mundial 2026 tables with points, goal difference, and advancement scenarios. All 8 groups updated in real-time.',
  keywords: [
    'World Cup 2026 standings',
    'Copa Mundial 2026 group tables',
    'Coupe du Monde 2026 rankings',
    'FIFA ワールド カップ 2026 グループ',
    'world cup 2026 group stage',
    'group A standings',
    'group B standings',
    'advancement scenarios',
    'points table'
  ],
  openGraph: {
    title: 'FIFA World Cup 2026 Standings | Group Tables',
    description: 'Live Copa Mundial 2026 group standings with points, goal difference, and advancement scenarios.',
  }
}

export default function StandingsPage() {
  return <StandingsClient />
}
