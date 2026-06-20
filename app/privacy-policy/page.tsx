import Script from 'next/script'

export default function PrivacyPolicyPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: June 16, 2026</p>

        <div className="bg-white rounded-lg p-8 shadow-sm prose max-w-none">
          <h2>Introduction</h2>
          <p>
            StatsHubs.net ("we," "our," or "us") operates the website statshubs.net (the "Site").
            This Privacy Policy informs you of our policies regarding the collection, use, and disclosure
            of personal data when you use our Site and the choices you have associated with that data.
          </p>

          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our Site, we automatically collect certain information about your device,
            including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website addresses</li>
            <li>General geographic location (country/region level)</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul>
            <li>Email address (if you subscribe to our newsletter)</li>
            <li>Form submissions (contact forms, feedback)</li>
            <li>Bracket predictions and saved preferences (stored locally in your browser)</li>
          </ul>

          <h2>Use of Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Site and hold
            certain information. Cookies are files with a small amount of data which may include an
            anonymous unique identifier.
          </p>
          <h3>Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
            <li><strong>Advertising Cookies:</strong> Used by our advertising partners to deliver relevant advertisements</li>
          </ul>

          <h2>Third-Party Services</h2>
          <h3>Analytics</h3>
          <p>
            We use Google Analytics to measure and analyze traffic on our Site. Google Analytics
            collects information such as how often users visit the Site, what pages they visit,
            and what other sites they used prior to coming to our Site.
          </p>

          <h3>Advertising</h3>
          <p>
            We partner with third-party advertising networks including Adsterra and Monetag.
            These services may use cookies and similar technologies to collect information about
            your visits to this and other websites in order to provide relevant advertisements.
          </p>

          <h3>Affiliate Links</h3>
          <p>
            Our Site contains affiliate links to third-party products and services. When you
            click on these links and make a purchase, we may receive a commission. This does not
            affect your purchase price.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our Site</li>
            <li>To notify you about changes to our Site</li>
            <li>To provide customer support</li>
            <li>To gather analysis and usage data to improve our Site</li>
            <li>To display relevant advertisements</li>
            <li>To detect and prevent technical issues</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for
            which it was collected, including to satisfy legal, accounting, or reporting requirements.
            Analytics data is retained for a maximum of 26 months.
          </p>

          <h2>Data Security</h2>
          <p>
            The security of your data is important to us. We strive to use commercially acceptable
            means to protect your personal data, but no method of transmission over the Internet
            or electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li>Right to access personal information we hold about you</li>
            <li>Right to request correction of inaccurate personal information</li>
            <li>Right to request deletion of your personal information</li>
            <li>Right to opt out of marketing communications</li>
            <li>Right to opt out of certain cookie-based tracking</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on servers located outside
            of your state, province, country, or other governmental jurisdiction. By using our
            Site, you consent to such transfers.
          </p>

          <h2>Links to Other Sites</h2>
          <p>
            Our Site may contain links to other sites that are not operated by us. If you click
            on a third-party link, you will be directed to that third party's site. We strongly
            advise you to review the Privacy Policy of every site you visit.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@statshubs.net</li>
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
