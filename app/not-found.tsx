import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl mb-6">⚽</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
            Go Home
          </Link>
          <Link href="/schedule" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300">
            View Schedule
          </Link>
        </div>
      </div>
    </div>
  )
}
