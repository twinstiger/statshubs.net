'use client'

import Script from 'next/script'

export function AdScript() {
  return (
    <>
      {/* Adsterra/Monetag Main Script */}
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

      {/* Adsterra/Monetag Secondary Script */}
      <Script
        id="adsterra-secondary"
        src="https://pl29763342.effectivecpmnetwork.com/76/24/27/762427d2c49841bf978fdff5e81cd616.js"
        async
      />
    </>
  )
}

export function AdBanner() {
  return (
    <div className="w-full max-w-[728px] mx-auto my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <div id="728x90"></div>
      </div>
    </div>
  )
}
