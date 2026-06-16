'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'Schedule', href: '/schedule' },
  { label: 'Time Zone', href: '/tools/timezone-converter' },
  { label: 'Bracket', href: '/tools/bracket-maker' },
  { label: 'Standings', href: '/tools/standings' },
  { label: 'Teams', href: '/tools/teams' },
  { label: 'News', href: '/news' },
  { label: 'Downloads', href: '/downloads' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900 text-white shadow-xl transform transition-transform z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              FAQ
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/tools/bracket-maker"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              🏆 Create Bracket
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
