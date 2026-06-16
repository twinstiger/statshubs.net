'use client'

import { useState } from 'react'

interface ShareData {
  title: string
  url: string
  text: string
}

export default function SocialShare() {
  const [copied, setCopied] = useState(false)

  const shareData: ShareData = {
    title: 'World Cup 2026 Tool Hub - Free Tools & Analysis',
    text: 'Check out this amazing World Cup 2026 tool hub with timezone converter, bracket maker, and live standings!',
    url: typeof window !== 'undefined' ? window.location.href : 'https://statshubs.net',
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
  }

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
    window.open(facebookUrl, '_blank', 'width=550,height=420')
  }

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`
    window.open(linkedInUrl, '_blank', 'width=550,height=420')
  }

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Share This Page</h3>

      <div className="grid grid-cols-5 gap-2 mb-4">
        {/* Twitter */}
        <button
          onClick={shareToTwitter}
          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          title="Share on Twitter"
        >
          <span className="text-xl mb-1">𝕏</span>
          <span className="text-xs">Twitter</span>
        </button>

        {/* Facebook */}
        <button
          onClick={shareToFacebook}
          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          title="Share on Facebook"
        >
          <span className="text-xl mb-1">📘</span>
          <span className="text-xs">Facebook</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={shareToLinkedIn}
          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          title="Share on LinkedIn"
        >
          <span className="text-xl mb-1">💼</span>
          <span className="text-xs">LinkedIn</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={shareToWhatsApp}
          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          title="Share on WhatsApp"
        >
          <span className="text-xl mb-1">💬</span>
          <span className="text-xs">WhatsApp</span>
        </button>

        {/* Copy Link */}
        <button
          onClick={copyLink}
          className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          title="Copy Link"
        >
          <span className="text-xl mb-1">{copied ? '✅' : '🔗'}</span>
          <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Direct Link */}
      <div>
        <label className="block text-sm font-medium mb-2">Direct Link</label>
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={shareData.url}
            className="flex-1 px-3 py-2 bg-gray-50 border rounded-lg text-sm"
          />
          <button
            onClick={copyLink}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  )
}
