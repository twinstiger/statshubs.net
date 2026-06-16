import GalleryClient from './GalleryClient'
import { Language } from '@/lib/i18n'

interface GalleryPageProps {
  params: { lang: string }
}

export default function GalleryPage({ params }: GalleryPageProps) {
  return <GalleryClient lang={params.lang as Language} />
}