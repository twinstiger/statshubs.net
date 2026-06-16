'use client'

import { useState, useEffect } from 'react'
import { teams } from '@/lib/data'
import Link from 'next/link'

interface GroupPrediction {
  first: string
  second: string
}

export default function BracketMakerPage() {
  const [predictions, setPredictions] = useState<Record<string, GroupPrediction>>({
    A: { first: '', second: '' },
    B: { first: '', second: '' },
    C: { first: '', second: '' },
    D: { first: '', second: '' },
    E: { first: '', second: '' },
    F: { first: '', second: '' },
    G: { first: '', second: '' },
    H: { first: '', second: '' },
  })

  const [bracket, setBracket] = useState<Record<string, string>>({})
  const [savedPrediction, setSavedPrediction] = useState<string | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wc2026-prediction')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPredictions(parsed.predictions || predictions)
        setBracket(parsed.bracket || {})
        setSavedPrediction(saved)
      } catch (e) {
        console.error('Failed to load prediction:', e)
      }
    }
  }, [])

  const getTeamsByGroup = (group: string) => {
    return teams.filter((t) => t.group === group)
  }

  const handleTeamSelect = (group: string, position: 'first' | 'second', teamSlug: string) => {
    setPredictions((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [position]: teamSlug,
      },
    }))
  }

  const generateBracket = () => {
    // Simple bracket generation based on predictions
    const newBracket: Record<string, string> = {}

    // Round of 16 (simplified)
    newBracket['R16-1'] = predictions.A.first
    newBracket['R16-2'] = predictions.B.second
    newBracket['R16-3'] = predictions.C.first
    newBracket['R16-4'] = predictions.D.second
    newBracket['R16-5'] = predictions.E.first
    newBracket['R16-6'] = predictions.F.second
    newBracket['R16-7'] = predictions.G.first
    newBracket['R16-8'] = predictions.H.second

    // Quarterfinals (simplified)
    newBracket['QF-1'] = newBracket['R16-1'] || 'TBD'
    newBracket['QF-2'] = newBracket['R16-3'] || 'TBD'
    newBracket['QF-3'] = newBracket['R16-5'] || 'TBD'
    newBracket['QF-4'] = newBracket['R16-7'] || 'TBD'

    // Semifinals
    newBracket['SF-1'] = newBracket['QF-1'] || 'TBD'
    newBracket['SF-2'] = newBracket['QF-3'] || 'TBD'

    // Final
    newBracket['F'] = newBracket['SF-1'] || 'TBD'

    setBracket(newBracket)
  }

  const savePrediction = () => {
    const data = {
      predictions,
      bracket,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem('wc2026-prediction', JSON.stringify(data))
    setSavedPrediction(JSON.stringify(data))
  }

  const clearPrediction = () => {
    localStorage.removeItem('wc2026-prediction')
    setPredictions({
      A: { first: '', second: '' },
      B: { first: '', second: '' },
      C: { first: '', second: '' },
      D: { first: '', second: '' },
      E: { first: '', second: '' },
      F: { first: '', second: '' },
      G: { first: '', second: '' },
      H: { first: '', second: '' },
    })
    setBracket({})
    setSavedPrediction(null)
  }

  const copyShareLink = () => {
    const shareData = btoa(JSON.stringify({ predictions, bracket }))
    navigator.clipboard.writeText(`${window.location.origin}/tools/bracket-maker?prediction=${shareData}`)
    alert('Share link copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">🏆 World Cup 2026 Bracket Maker</h1>
          <p className="text-gray-600">
            Predict the group stage results and generate your custom tournament bracket.
            Save your predictions and share with friends!
          </p>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg p-4 mb-8 shadow-sm flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={generateBracket}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate Bracket
            </button>
            <button
              onClick={savePrediction}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Save Prediction
            </button>
            <button
              onClick={clearPrediction}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Clear All
            </button>
          </div>
          <button
            onClick={copyShareLink}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Copy Share Link
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Group Selection */}
          <div>
            <h2 className="text-xl font-bold mb-4">Select Group Winners & Runners-up</h2>
            <p className="text-sm text-gray-600 mb-6">
              Choose the top 2 teams from each group to generate your bracket
            </p>

            <div className="space-y-6">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((group) => (
                <div key={group} className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold mb-3 text-blue-900">Group {group}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">1st Place</label>
                      <select
                        value={predictions[group]?.first || ''}
                        onChange={(e) => handleTeamSelect(group, 'first', e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="">Select team</option>
                        {getTeamsByGroup(group).map((team) => (
                          <option key={team.slug} value={team.slug}>
                            {team.flag} {team.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">2nd Place</label>
                      <select
                        value={predictions[group]?.second || ''}
                        onChange={(e) => handleTeamSelect(group, 'second', e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="">Select team</option>
                        {getTeamsByGroup(group)
                          .filter((t) => t.slug !== predictions[group]?.first)
                          .map((team) => (
                            <option key={team.slug} value={team.slug}>
                              {team.flag} {team.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  {predictions[group]?.first && predictions[group]?.second && (
                    <div className="mt-3 text-sm text-green-600">
                      ✓ Selection complete
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bracket Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">Your Tournament Bracket</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {Object.keys(bracket).length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="mb-2">Select group winners to generate your bracket</p>
                  <p className="text-sm">Click "Generate Bracket" button above</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Round of 16 */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-600 mb-2">ROUND OF 16</h4>
                    <div className="space-y-2">
                      {['R16-1', 'R16-2', 'R16-3', 'R16-4', 'R16-5', 'R16-6', 'R16-7', 'R16-8'].map((key) => (
                        <div key={key} className="flex items-center gap-2 text-sm">
                          <span className="w-8 text-gray-400">{key.replace('R16-', 'Match ')}</span>
                          <span className="flex-1 px-2 py-1 bg-gray-50 rounded">
                            {bracket[key] || 'TBD'}
                          </span>
                          <span className="text-gray-400">vs</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quarterfinals */}
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-bold text-gray-600 mb-2">QUARTERFINALS</h4>
                    <div className="space-y-2">
                      {['QF-1', 'QF-2', 'QF-3', 'QF-4'].map((key) => (
                        <div key={key} className="flex items-center gap-2 text-sm">
                          <span className="w-8 text-gray-400">{key}</span>
                          <span className="flex-1 px-2 py-1 bg-blue-50 rounded font-medium">
                            {bracket[key] || 'TBD'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semifinals */}
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-bold text-gray-600 mb-2">SEMIFINALS</h4>
                    <div className="space-y-2">
                      {['SF-1', 'SF-2'].map((key) => (
                        <div key={key} className="flex items-center gap-2 text-sm">
                          <span className="w-8 text-gray-400">{key}</span>
                          <span className="flex-1 px-2 py-1 bg-purple-50 rounded font-medium">
                            {bracket[key] || 'TBD'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final */}
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-bold text-gray-600 mb-2">FINAL</h4>
                    <div className="flex items-center gap-2">
                      <span className="w-8"></span>
                      <span className="flex-1 px-2 py-2 bg-yellow-50 rounded font-bold text-center border-2 border-yellow-400">
                        🏆 {bracket['F'] || 'TBD'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Saved Prediction Info */}
        {savedPrediction && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              ✓ Your prediction has been saved to this browser. Use "Copy Share Link" to share with friends!
            </p>
          </div>
        )}

        {/* SEO Content */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">How to Use the World Cup 2026 Bracket Maker</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our World Cup 2026 bracket maker allows you to predict the outcome of the tournament before it begins.
              With the expanded 48-team format, predicting the knockout stages is more exciting than ever.
              Fill in your group stage predictions, generate your bracket, and compare your predictions with friends.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Select the 1st and 2nd place teams from each of the 8 groups</li>
              <li>Click "Generate Bracket" to see your predicted knockout stage</li>
              <li>Save your prediction to this browser for future reference</li>
              <li>Share your bracket with friends using the share link</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">2026 World Cup Format Changes</h3>
            <p className="mb-4">
              The 2026 World Cup introduces significant changes from previous tournaments:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>48 teams</strong> (increased from 32)</li>
              <li><strong>104 matches</strong> (increased from 64)</li>
              <li><strong>8 groups of 6 teams</strong> (changed from 8 groups of 4)</li>
              <li><strong>3 teams advance</strong> from each group (2 automatic + best third-place)</li>
              <li><strong>New knockout structure</strong> with 8 groups feeding into a 32-team knockout</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Making Predictions</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Consider recent form and head-to-head records</li>
              <li>Check for injured or suspended players</li>
              <li>Factor in travel and adaptation to different climates</li>
              <li>Look at historical performance in similar tournaments</li>
              <li>Don't forget about dark horse teams who could surprise</li>
            </ul>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link href="/tools/timezone-converter" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h4 className="font-semibold">Time Zone Converter</h4>
            <p className="text-sm text-gray-600">Convert match times</p>
          </Link>
          <Link href="/tools/standings" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold">Standings Tracker</h4>
            <p className="text-sm text-gray-600">Track live standings</p>
          </Link>
          <Link href="/tools/schedule-generator" className="tool-card bg-white rounded-lg p-4 border text-center">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-semibold">Print Schedule</h4>
            <p className="text-sm text-gray-600">Download schedules</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
