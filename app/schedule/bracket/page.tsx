import { Metadata } from 'next'
import BracketPage from './BracketPage'

export const metadata: Metadata = {
  title: 'World Cup 2026 Bracket | Knockout Stage | Copa Mundial',
  description: 'Interactive knockout stage bracket for FIFA World Cup 2026. View Round of 16, Quarterfinals, Semifinals, and Final matchups.',
}

export default function ScheduleBracketPage() {
  return <BracketPage />
}
