import { Metadata } from 'next'
import ScheduleClient from '../ScheduleClient'

export const metadata: Metadata = {
  title: 'World Cup 2026 Schedule List | All Fixtures | Copa Mundial',
  description: 'Complete list of all FIFA World Cup 2026 matches. Filter by group, stage, or timezone.',
}

export default function ScheduleListPage() {
  return <ScheduleClient />
}
