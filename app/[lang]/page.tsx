import HomeClient from './HomeClient'
import { Language } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ lang: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params
  return <HomeClient lang={lang as Language} />
}
