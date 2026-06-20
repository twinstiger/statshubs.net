import Script from 'next/script'

export default function NewsLangPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Latest News</h1>
          <p className="text-gray-600">Stay updated with World Cup 2026 news and analysis</p>
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold mb-4">News</h2>
          <p className="text-gray-600 mb-8">Read the latest World Cup news</p>
          <a
            href="/news"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Read News →
          </a>
        </div>
      </div>
    </div>

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
