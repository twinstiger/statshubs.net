import GalleryClient from './GalleryClient'
import { Language } from '@/lib/i18n'
import Script from 'next/script'

interface GalleryPageProps {
  params: Promise<{ lang: string }>
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params
  return (
    <>
      <GalleryClient lang={lang as Language} />

      {/* Advertisement */}
      <Script
        id="adsterra-invoke"
        async
        dangerouslySetInnerHTML={{
          __html: `
            var _pop = _pop || [];
            _pop.push(['place', '728x90']);
            (function() {
              var s = document.createElement('script');
              s.src = '//pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js';
              s.async = true;
              document.head.appendChild(s);
            })();
          `
        }}
      />
      <Script
        id="adsterra-secondary"
        src="https://pl29763342.effectivecpmnetwork.com/76/24/27/762427d2c49841bf978fdff5e81cd616.js"
        async
      />
    </>
  )
}