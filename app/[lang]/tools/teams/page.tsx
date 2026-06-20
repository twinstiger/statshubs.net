import TeamsClient from './TeamsClient'
import { Language } from '@/lib/i18n'
import Script from 'next/script'

interface TeamsPageProps {
  params: { lang: string }
}

export default function TeamsPage({ params }: TeamsPageProps) {
  return (
    <>
      <TeamsClient lang={params.lang as Language} />

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
              s.src = '//pl29763332.effectivecpmnetwork.com/29662833/invoke.js';
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
