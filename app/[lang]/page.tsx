import HomeClient from './HomeClient'

interface HomePageProps {
  params: { lang: string }
}

export default function HomePage({ params }: HomePageProps) {
  return <HomeClient lang={params.lang as any} />
}
