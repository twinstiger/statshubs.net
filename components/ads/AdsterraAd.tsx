'use client'

import Script from 'next/script'

// Adsterra 广告组件
export function Adsterra728x90() {
  return (
    <div className="w-full max-w-[728px] mx-auto my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              var _pop = _pop || [];
              _pop.push(['place', '728x90']);
              (function() {
                var s = document.createElement('script');
                s.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js';
                s.async = true;
                document.head.appendChild(s);
              })();
            `
          }}
        />
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}

export function Adsterra300x250() {
  return (
    <div className="w-full max-w-[300px] mx-auto my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              var _pop = _pop || [];
              _pop.push(['place', '300x250']);
              (function() {
                var s = document.createElement('script');
                s.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js';
                s.async = true;
                document.head.appendChild(s);
              })();
            `
          }}
        />
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}

export function AdsterraSidebar() {
  return (
    <div className="w-full my-6">
      <div className="text-center text-xs text-gray-400 mb-2">Advertisement</div>
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              var _pop = _pop || [];
              _pop.push(['place', '300x250']);
              (function() {
                var s = document.createElement('script');
                s.src = 'https://pl29763332.effectivecpmnetwork.com/c0bc28dc211ef406e670391da00e9e1a/invoke.js';
                s.async = true;
                document.head.appendChild(s);
              })();
            `
          }}
        />
        <div id="container-c0bc28dc211ef406e670391da00e9e1a"></div>
      </div>
    </div>
  )
}
