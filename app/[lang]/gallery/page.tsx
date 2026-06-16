import GalleryClient from './GalleryClient'
import { Language } from '@/lib/i18n'

interface GalleryPageProps {
  params: Promise<{ lang: string }>
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params
  return <GalleryClient lang={lang as Language} />
}