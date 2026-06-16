'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  pageSize: number
  requests: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    pageSize: 0,
    requests: 0,
  })
  const [showMetrics, setShowMetrics] = useState(false)

  useEffect(() => {
    // Calculate performance metrics
    const calculateMetrics = () => {
      if (typeof window === 'undefined') return

      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const loadTime = Math.round(perfData.loadEventEnd - perfData.startTime)

      // Estimate page size (rough calculation)
      const pageSize = Math.round(
        JSON.stringify(document.body.innerHTML).length / 1024
      )

      setMetrics({
        loadTime,
        pageSize,
        requests: performance.getEntriesByType('resource').length,
      })
    }

    if (window.performance) {
      calculateMetrics()
    }
  }, [])

  const getScore = (loadTime: number) => {
    if (loadTime < 1000) return { score: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' }
    if (loadTime < 2500) return { score: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' }
    if (loadTime < 4000) return { score: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' }
    return { score: 'Poor', color: 'text-red-600', bg: 'bg-red-100' }
  }

  const score = getScore(metrics.loadTime)

  if (!showMetrics) {
    return (
      <button
        onClick={() => setShowMetrics(true)}
        className="fixed bottom-20 right-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow z-40"
        title="Show Performance Metrics"
      >
        <span className="text-xl">📊</span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-20 right-4 bg-white shadow-xl rounded-lg p-4 w-72 z-40">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">Performance Metrics</h3>
        <button
          onClick={() => setShowMetrics(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div className={`px-3 py-2 rounded-lg ${score.bg}`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Load Time</span>
            <span className={`font-bold ${score.color}`}>{score.score}</span>
          </div>
          <p className="text-2xl font-bold mt-1">{metrics.loadTime}ms</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Page Size</p>
            <p className="text-lg font-bold">{metrics.pageSize} KB</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500">Requests</p>
            <p className="text-lg font-bold">{metrics.requests}</p>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center">
          Core Web Vitals Monitoring
        </div>
      </div>
    </div>
  )
}
