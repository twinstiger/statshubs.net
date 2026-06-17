import BracketClient from '@/app/[lang]/schedule/BracketClient'
import { Language } from '@/lib/i18n'

interface BracketPageProps {
  params: { lang: string }
}

export default function BracketPage({ params }: BracketPageProps) {
  return <BracketClient lang={params.lang as Language} />
}
