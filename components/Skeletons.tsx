export default function MatchCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-20 bg-gray-200 rounded"></div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 text-center">
          <div className="h-6 w-24 bg-gray-200 rounded mx-auto mb-2"></div>
        </div>
        <div className="px-4">
          <div className="h-8 w-12 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1 text-center">
          <div className="h-6 w-24 bg-gray-200 rounded mx-auto mb-2"></div>
        </div>
      </div>
      <div className="text-center">
        <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  )
}

export function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-6">
        <div className="h-4 w-20 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export function StandingsTableSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="bg-gray-200 h-12 animate-pulse"></div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-4 p-4 border-t">
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex-1 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}

export function TeamCardSkeleton() {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        <div>
          <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}
