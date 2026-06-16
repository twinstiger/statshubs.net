'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  message: string
  subscribe: boolean
}

export default function NewsletterSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    subscribe: true,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Mexico', 'Brazil',
    'Argentina', 'Germany', 'France', 'Spain', 'Italy', 'Portugal',
    'Japan', 'South Korea', 'Australia', 'China', 'India', 'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // In production, this would send to your backend
      console.log('Newsletter signup:', formData)

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
        subscribe: true,
      })

      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2">You're Subscribed!</h3>
        <p className="text-green-100 mb-4">
          Welcome to the World Cup 2026 community. Check your email for confirmation.
        </p>
        <p className="text-sm text-green-200">
          You'll receive daily updates, match previews, and exclusive analysis.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">📬 World Cup 2026 Newsletter</h3>
          <p className="text-blue-100">
            Get exclusive updates, match predictions, and expert analysis delivered to your inbox
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">⚽</div>
            <p className="font-medium">Daily Match Previews</p>
            <p className="text-sm text-blue-200">Never miss a game</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="font-medium">Expert Analysis</p>
            <p className="text-sm text-blue-200">In-depth breakdowns</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎁</div>
            <p className="font-medium">Exclusive Content</p>
            <p className="text-sm text-blue-200">Subscriber-only perks</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone (optional)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message (optional)</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 rounded-lg text-gray-900"
              placeholder="Any questions or comments?"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="subscribe"
              checked={formData.subscribe}
              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
              className="mt-1 w-4 h-4"
            />
            <label htmlFor="subscribe" className="text-sm text-blue-100">
              I agree to receive newsletters and updates about World Cup 2026.
              You can unsubscribe at any time.
            </label>
          </div>

          {error && (
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Now →'}
          </button>

          <p className="text-center text-sm text-blue-200">
            🔒 Your data is secure. We never spam or share your information.
          </p>
        </form>
      </div>
    </div>
  )
}
