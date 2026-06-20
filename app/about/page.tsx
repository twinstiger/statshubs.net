import Script from 'next/script'

export default function AboutPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">About World Cup 2026 Tool Hub</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm prose max-w-none">
          <h2>Who We Are</h2>
          <p>
            StatsHubs.net is an independent fan website dedicated to providing comprehensive
            tools and information for the 2026 FIFA World Cup. We are not affiliated with,
            endorsed by, or connected to FIFA or any national football association.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to create the most useful and user-friendly collection of World Cup
            tools available online. We aim to enhance the fan experience by providing:
          </p>
          <ul>
            <li>Accurate and easy-to-use timezone converters</li>
            <li>Interactive bracket prediction tools</li>
            <li>Real-time standings trackers</li>
            <li>Printable schedules and resources</li>
            <li>Comprehensive team information</li>
          </ul>

          <h2>What We Offer</h2>

          <h3>Free Tools</h3>
          <p>
            All our tools are completely free to use. We believe every fan deserves access to
            quality World Cup resources, regardless of their budget.
          </p>
          <ul>
            <li><strong>Time Zone Converter:</strong> Convert all 104 match times to your local timezone</li>
            <li><strong>Bracket Maker:</strong> Predict tournament outcomes and save your picks</li>
            <li><strong>Standings Tracker:</strong> Follow all group stage results in real-time</li>
            <li><strong>Schedule Generator:</strong> Download printable match schedules</li>
            <li><strong>Team Database:</strong> Information on all 48 participating teams</li>
          </ul>

          <h3>News & Analysis</h3>
          <p>
            Our editorial team provides:
          </p>
          <ul>
            <li>Match previews and predictions</li>
            <li>Team analysis and squad information</li>
            <li>Tournament guides and explainers</li>
            <li>Fan resources and recommendations</li>
          </ul>

          <h2>Our Values</h2>

          <h3>Transparency</h3>
          <p>
            We're clear about what we are (an independent fan site) and what we aren't
            (an official FIFA site). We disclose our advertising and affiliate relationships.
          </p>

          <h3>Accuracy</h3>
          <p>
            We strive for 100% accuracy in our match schedules and data. While we source from
            reliable providers, we always recommend verifying critical information with
            official sources.
          </p>

          <h3>Accessibility</h3>
          <p>
            Our Site is designed to be accessible to all fans, regardless of technical expertise.
            We optimize for mobile devices and screen readers.
          </p>

          <h2>Legal Notice</h2>
          <p>
            <strong>Important:</strong> StatsHubs.net does not broadcast, stream, or provide
            any live or recorded coverage of World Cup matches. We do not use official FIFA
            logos, official tournament photography, or any copyrighted materials without proper
            authorization.
          </p>
          <p>
            All trademarks mentioned on this Site are the property of their respective owners.
          </p>

          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have feedback, suggestions, or just want
            to say hello, feel free to reach out:
          </p>
          <ul>
            <li>General inquiries: <a href="mailto:info@statshubs.net">info@statshubs.net</a></li>
            <li>Press inquiries: <a href="mailto:press@statshubs.net">press@statshubs.net</a></li>
            <li>Partnerships: <a href="mailto:partners@statshubs.net">partners@statshubs.net</a></li>
          </ul>

          <h2>Acknowledgments</h2>
          <p>
            We would like to thank:
          </p>
          <ul>
            <li>Our users for their support and feedback</li>
            <li>Open source communities for their incredible tools</li>
            <li>Free software projects that power our Site</li>
          </ul>

          <h2>Join Our Community</h2>
          <p>
            Follow us on social media for updates and engage with fellow fans:
          </p>
          <ul>
            <li>Twitter: @StatsHubs</li>
            <li>Facebook: StatsHubsOfficial</li>
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
