'use client'

import { useState } from 'react'

interface RatingProps {
  itemId: string
  itemType: 'article' | 'team' | 'tool'
  initialRating?: number
}

export default function Rating({ itemId, itemType, initialRating = 0 }: RatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)
  const [userRating, setUserRating] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (value: number) => {
    if (hasVoted) return

    setUserRating(value)
    setRating(value)
    setHasVoted(true)

    // Save to localStorage
    const key = `rating_${itemType}_${itemId}`
    localStorage.setItem(key, String(value))

    // In production, this would send to your backend
    console.log(`Voted ${value} for ${itemType}:${itemId}`)
  }

  const handleReset = () => {
    setHasVoted(false)
    setUserRating(0)

    const key = `rating_${itemType}_${itemId}`
    localStorage.removeItem(key)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="font-bold mb-4">Rate This {itemType.charAt(0).toUpperCase() + itemType.slice(1)}</h3>

      {!hasVoted ? (
        <>
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleVote(value)}
                className="text-3xl transition-transform hover:scale-110"
              >
                {value <= (hoverRating || rating) ? '⭐' : '☆'}
              </button>
            ))}
            <span className="ml-4 text-2xl font-bold">
              {rating > 0 ? `${rating}/5` : '-/5'}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Click to rate (1-5 stars)
          </p>
        </>
      ) : (
        <>
          <div className="text-center mb-4">
            <p className="text-lg mb-2">Thanks for voting!</p>
            <div className="text-4xl mb-2">
              {'⭐'.repeat(userRating)}
            </div>
            <p className="text-gray-600">
              You rated this {userRating}/5
            </p>
          </div>
          <button
            onClick={handleReset}
            className="w-full text-sm text-blue-600 hover:underline"
          >
            Change my vote
          </button>
        </>
      )}
    </div>
  )
}
