import TeamDetailClient from './TeamDetailClient'
import { Language } from '@/lib/i18n'

interface TeamPageProps {
  params: { lang: string; team: string }
}

export default function TeamPage({ params }: TeamPageProps) {
  return <TeamDetailClient lang={params.lang as Language} />
}
