import TeamsClient from './TeamsClient'
import { Language } from '@/lib/i18n'

interface TeamsPageProps {
  params: { lang: string }
}

export default function TeamsPage({ params }: TeamsPageProps) {
  return <TeamsClient lang={params.lang as Language} />
}
