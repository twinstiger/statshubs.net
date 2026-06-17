import BracketClient from './BracketClient'
import ScheduleClient from './ScheduleClient'
import { Language } from '@/lib/i18n'

interface SchedulePageProps {
  params: Promise<{ lang: string }>
}

export default async function SchedulePage({ params }: SchedulePageProps) {
  const { lang } = await params
  return <ScheduleClient lang={lang as Language} />
}

// Also export BracketClient for tools page
export { BracketClient }
