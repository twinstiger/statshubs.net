import Script from 'next/script'

export default function TermsPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: June 16, 2026</p>

        <div className="bg-white rounded-lg p-8 shadow-sm prose max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the StatsHubs.net website (the "Site"), you agree to be bound
            by these Terms of Service and all applicable laws and regulations. If you do not agree
            with any of these terms, you are prohibited from using or accessing this Site.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on StatsHubs.net for
            personal, non-commercial transitory viewing only. This is the grant of a license,
            not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or public display</li>
            <li>Attempt to reverse engineer any software contained on the Site</li>
            <li>Remove any copyright or proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on StatsHubs.net are provided on an 'as is' basis. StatsHubs.net makes
            no warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on StatsHubs.net could include technical, typographical, or
            photographic errors. StatsHubs.net does not warrant that any of the materials on its
            Site are accurate, complete, or current. StatsHubs.net may make changes to the
            materials contained on its Site at any time without notice.
          </p>

          <h2>Links</h2>
          <p>
            StatsHubs.net has not reviewed all of the sites linked to its Site and is not
            responsible for the contents of any such linked site. The inclusion of any link
            does not imply endorsement by StatsHubs.net of the site. Use of any such linked
            website is at the user's own risk.
          </p>

          <h2>Modifications</h2>
          <p>
            StatsHubs.net may revise these Terms of Service for its Site at any time without
            notice. By using this Site you are agreeing to be bound by the then current version
            of these Terms of Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the
            laws of the jurisdiction in which StatsHubs.net operates, and you irrevocably submit
            to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site, including but not limited to text, graphics, logos, images,
            and software, is the property of StatsHubs.net or its content suppliers and is
            protected by international copyright laws.
          </p>
          <p>
            FIFA, World Cup, and related marks are trademarks of FIFA. We are not affiliated
            with, endorsed by, or connected to FIFA in any way.
          </p>

          <h2>User Conduct</h2>
          <p>When using our Site, you agree not to:</p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Infringe on any third-party rights</li>
            <li>Interfere with or disrupt the Site</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Use the Site for any fraudulent or harmful purpose</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall StatsHubs.net or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on StatsHubs.net.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless StatsHubs.net and its affiliates from any
            claims, damages, or expenses arising from your use of the Site or violation of these Terms.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions
            shall continue in full force and effect.
          </p>

          <h2>Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us:</p>
          <ul>
            <li>By email: legal@statshubs.net</li>
            <li>Through our <a href="/contact">contact form</a></li>
          </ul>
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
