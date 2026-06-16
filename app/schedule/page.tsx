import { Metadata } from 'next'
import ScheduleClient from './ScheduleClient'

export const metadata: Metadata = {
  title: 'World Cup 2026 Schedule | Copa Mundial Fixtures | Match Times',
  description: 'Complete FIFA World Cup 2026 schedule with Copa Mundial 2026 match times in all time zones. Download printable fixtures for Coupe du Monde 2026. All 104 matches with venue details.',
  keywords: [
    'World Cup 2026 schedule',
    'Copa Mundial 2026 fixtures',
    'Coupe du Monde 2026 schedule',
    'FIFA ワールド カップ 2026 日程',
    'brazil vs morocco',
    'world cup 2026 matches',
    'world cup fixtures',
    'match times',
    'venue schedule'
  ],
  openGraph: {
    title: 'FIFA World Cup 2026 Schedule | Copa Mundial Fixtures',
    description: 'Complete World Cup 2026 match schedule with Copa Mundial fixtures and kickoff times worldwide.',
  }
}

export default function SchedulePage() {
  return <ScheduleClient />
}
