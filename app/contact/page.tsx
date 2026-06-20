'use client'

import { useState } from 'react'
import { AdScript, AdBanner } from '@/components/ads/AdScript'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          Have questions, feedback, or partnership inquiries? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Site Feedback</option>
                    <option value="bug">Report a Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="advertising">Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@statshubs.net" className="text-blue-600 hover:underline">
                      info@statshubs.net
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">We're a remote team serving fans worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Department Contacts</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <a href="mailto:info@statshubs.net" className="text-blue-600 hover:underline text-sm">
                    info@statshubs.net
                  </a>
                </div>
                <div>
                  <p className="font-medium">Press & Media</p>
                  <a href="mailto:press@statshubs.net" className="text-blue-600 hover:underline text-sm">
                    press@statshubs.net
                  </a>
                </div>
                <div>
                  <p className="font-medium">Partnerships</p>
                  <a href="mailto:partners@statshubs.net" className="text-blue-600 hover:underline text-sm">
                    partners@statshubs.net
                  </a>
                </div>
                <div>
                  <p className="font-medium">Advertising</p>
                  <a href="mailto:ads@statshubs.net" className="text-blue-600 hover:underline text-sm">
                    ads@statshubs.net
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Follow Us</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay connected for the latest World Cup updates
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
                  <span className="text-xl">▶️</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How can I advertise on your site?</h3>
              <p className="text-gray-600">
                We offer various advertising options for sports-related brands. Please email
                ads@statshubs.net with your requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">I found incorrect information. How can I report it?</h3>
              <p className="text-gray-600">
                We strive for accuracy but appreciate your help! Use the contact form above
                and select "Report a Bug" as the subject.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I partner with StatsHubs?</h3>
              <p className="text-gray-600">
                We're open to partnerships that benefit our users. Email partners@statshubs.net
                to discuss opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I request a new feature?</h3>
              <p className="text-gray-600">
                We'd love to hear your ideas! Use the contact form and select "Feature Request"
                as the subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AdBanner />

    <AdScript />
    </>
  )
}
