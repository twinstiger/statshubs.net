import { Metadata } from 'next'
import BracketPage from './bracket/BracketPage'

export const metadata: Metadata = {
  title: 'World Cup 2026 Match Schedule | Knockout Stage Bracket | Copa Mundial',
  description: 'Complete match schedule for FIFA World Cup 2026. View knockout stage bracket with Round of 16, Quarterfinals, Semifinals, Final and team statistics.',
  keywords: [
    'World Cup 2026 schedule',
    'Copa Mundial 2026 bracket',
    'Knockout stage',
    'Round of 16',
    'Quarterfinals',
    'Semifinals',
    'Final',
    'world cup bracket',
    'elimination bracket'
  ],
  openGraph: {
    title: 'FIFA World Cup 2026 Match Schedule | Knockout Stage Bracket',
    description: 'View the complete knockout stage bracket for World Cup 2026 with team matchups and statistics.',
  }
}

export default function SchedulePage() {
  return <BracketPage />
}
