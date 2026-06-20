'use client'

import { useState } from 'react'
import { AdScript, AdBanner } from '@/components/ads/AdScript'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'When is the 2026 World Cup?',
      answer: 'The 2026 FIFA World Cup will run from June 11 to July 19, 2026. The opening match will be on June 11, with the final scheduled for July 19.'
    },
    {
      question: 'Where is the 2026 World Cup being held?',
      answer: 'The 2026 World Cup will be hosted across three countries: United States, Canada, and Mexico. It will be the first World Cup hosted by three nations.'
    },
    {
      question: 'How many teams are in the 2026 World Cup?',
      answer: 'The 2026 World Cup features 48 teams, expanded from 32 in previous tournaments. Teams are divided into 8 groups of 6 teams each.'
    },
    {
      question: 'How does the new 48-team format work?',
      answer: 'With 48 teams in 8 groups of 6, each team plays 5 group stage matches (increased from 3). The top 2 teams from each group advance, plus the 4 best third-place teams, making 24 teams in the knockout stage.'
    },
    {
      question: 'How can I watch World Cup matches?',
      answer: 'Broadcast rights vary by country. Check official broadcasters in your region. We provide a guide to legitimate streaming platforms but do not provide any streaming links or broadcasts.'
    },
    {
      question: 'Is this website affiliated with FIFA?',
      answer: 'No, StatsHubs.net is an independent fan website. We are not affiliated with, endorsed by, or sponsored by FIFA or any national football association.'
    },
    {
      question: 'Are your tools free to use?',
      answer: 'Yes, all our tools including the timezone converter, bracket maker, standings tracker, and printable schedules are completely free to use.'
    },
    {
      question: 'How accurate is the match schedule?',
      answer: 'We strive for 100% accuracy in our match schedules. However, kickoff times may change due to broadcasting requirements. Always verify with official sources before making travel plans.'
    },
    {
      question: 'Can I download and print the schedule?',
      answer: 'Yes! Use our Schedule Generator tool to download a printable PDF version of the World Cup schedule in various formats and timezones.'
    },
    {
      question: 'How does the timezone converter work?',
      answer: 'Our timezone converter automatically adjusts all 104 match times to your selected timezone. Simply choose your timezone from the dropdown and all times will update instantly.'
    },
    {
      question: 'What happened to my bracket prediction?',
      answer: 'Your bracket predictions are saved locally in your browser using localStorage. They are not stored on our servers. Clear your browser data will remove saved predictions.'
    },
    {
      question: 'How do I share my bracket with friends?',
      answer: 'Use the "Copy Share Link" button in our Bracket Maker tool. This generates a unique URL that you can send to friends to show them your predictions.'
    },
    {
      question: 'Is it safe to click on affiliate links?',
      answer: 'Yes, affiliate links are safe and lead to legitimate retailers like Amazon. We may earn a small commission if you make a purchase, at no extra cost to you.'
    },
    {
      question: 'How often are standings updated?',
      answer: 'Standings are updated after each match. During live matches, scores may be updated in near real-time depending on data availability.'
    },
    {
      question: 'Can I use your content on my website?',
      answer: 'No, all content on StatsHubs.net is copyrighted. You may link to our pages, but reproducing our content without permission is not allowed.'
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-center mb-8">
          Everything you need to know about the 2026 World Cup and our tools
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </div>
    </div>

    <AdBanner />

    <AdScript />
    </>
  )
}
