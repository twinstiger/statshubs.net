'use client'

import Link from 'next/link'
import { matches, standings, allArticles } from '@/lib/data'
import { useState } from 'react'

export default function HomePage() {
  const [currentDate] = useState('2026-06-16')
  const featuredArticles = allArticles.slice(0, 3)

  // 获取即将开始的比赛（未来7天内）
  const upcomingMatches = matches
    .filter(match => {
      const matchDate = new Date(match.date)
      const today = new Date(currentDate)
      const diffDays = Math.ceil((matchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      return diffDays >= 0 && diffDays <= 7
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`)
      const dateB = new Date(`${b.date}T${b.time}`)
      return dateA.getTime() - dateB.getTime()
    })
    .slice(0, 3)

  // 获取今天的比赛
  const todayMatches = matches.filter(match => match.date === currentDate)

  // 计算距离开幕式
  const openingDate = new Date('2026-06-11')
  const today = new Date(currentDate)
  const daysSinceOpening = Math.floor((today.getTime() - openingDate.getTime()) / (1000 * 60 * 60 * 24))

  // 计算距决赛
  const finalDate = new Date('2026-07-19')
  const daysToFinal = Math.ceil((finalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ⚽ FIFA World Cup 2026
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Your Ultimate Companion for the 48-Team Tournament
            </p>
          </div>

          {/* Status Banner */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-3xl mx-auto">
            {daysSinceOpening >= 0 ? (
              <div className="text-center">
                <p className="text-blue-200 mb-2">🏆 Tournament In Progress</p>
                <p className="text-3xl font-bold">
                  Day {daysSinceOpening + 1} of the World Cup
                </p>
                <p className="text-lg mt-2">
                  {daysToFinal > 0 ? `${daysToFinal} days until the Final` : '🏆 Final Today!'}
                </p>
                {todayMatches.length > 0 && (
                  <p className="mt-2 text-blue-200">
                    📅 {todayMatches.length} match{todayMatches.length > 1 ? 'es' : ''} today
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-3xl font-bold">{Math.abs(daysSinceOpening)} Days</p>
                <p className="text-blue-200">Until Opening Match</p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{daysSinceOpening >= 0 ? '🔥 Live' : Math.abs(daysSinceOpening)}</p>
              <p className="text-sm text-blue-200">Status</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{matches.length}</p>
              <p className="text-sm text-blue-200">Total Matches</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{daysToFinal > 0 ? daysToFinal : 0}</p>
              <p className="text-sm text-blue-200">Days to Final</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">48</p>
              <p className="text-sm text-blue-200">Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Matches */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {todayMatches.length > 0 ? `Today's Matches (${currentDate})` : 'Upcoming Matches'}
          </h2>
          <Link href="/schedule" className="text-blue-600 hover:underline">
            View Full Schedule →
          </Link>
        </div>

        {upcomingMatches.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => {
              const matchDate = new Date(match.date)
              const today = new Date(currentDate)
              const diffDays = Math.ceil((matchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

              return (
                <div key={match.id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {match.group ? `Group ${match.group}` : match.stage}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {diffDays === 0 ? 'Today' : diffDays === 1 ? 'Tomorrow' : `In ${diffDays} days`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <p className="font-semibold text-lg">{match.homeTeam}</p>
                    </div>
                    <div className="px-4 text-2xl font-bold text-gray-400">VS</div>
                    <div className="text-center flex-1">
                      <p className="font-semibold text-lg">{match.awayTeam}</p>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-600">
                    <p className="font-medium">{match.date} • {match.time}</p>
                    <p className="text-xs mt-1 text-gray-500">{match.venue}, {match.city}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center shadow-sm">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Tournament Completed!</h3>
            <p className="text-gray-600">All matches have been played. Check the results!</p>
          </div>
        )}
      </section>

      {/* Ad Banner */}
      <section className="py-8 container mx-auto px-4">
        <div className="max-w-[728px] h-[90px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center text-gray-400">
            <p className="text-sm">Advertisement</p>
            <p className="text-xs">728x90</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Essential World Cup Tools</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/tools/timezone-converter" className="bg-white rounded-lg p-6 text-center border hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">Time Zone Converter</h3>
              <p className="text-sm text-gray-600">Convert match times to your local timezone</p>
            </Link>

            <Link href="/tools/bracket-maker" className="bg-white rounded-lg p-6 text-center border hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Bracket Maker</h3>
              <p className="text-sm text-gray-600">Predict the tournament results</p>
            </Link>

            <Link href="/tools/standings" className="bg-white rounded-lg p-6 text-center border hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Standings Tracker</h3>
              <p className="text-sm text-gray-600">Live group standings & scenarios</p>
            </Link>

            <Link href="/tools/schedule-generator" className="bg-white rounded-lg p-6 text-center border hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-semibold mb-2">Print Schedule</h3>
              <p className="text-sm text-gray-600">Download printable PDF schedules</p>
            </Link>

            <Link href="/tools/teams" className="bg-white rounded-lg p-6 text-center border hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold mb-2">Team Squads</h3>
              <p className="text-sm text-gray-600">All 48 teams with rosters</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Standings Preview */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Group Standings</h2>
          <Link href="/tools/standings" className="text-blue-600 hover:underline">
            View All Standings →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {standings.slice(0, 3).map((group) => (
            <div key={group.group} className="bg-white border rounded-lg overflow-hidden">
              <div className="bg-blue-900 text-white px-4 py-3 font-bold">
                Group {group.group}
              </div>
              <div className="p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 text-xs border-b">
                      <th className="text-left py-2">#</th>
                      <th className="text-left py-2">Team</th>
                      <th className="text-center py-2">P</th>
                      <th className="text-center py-2">GD</th>
                      <th className="text-center py-2">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.teams.map((team, idx) => (
                      <tr key={team.team} className="border-b last:border-0">
                        <td className="py-2">{idx + 1}</td>
                        <td className="py-2 font-medium">{team.team}</td>
                        <td className="py-2 text-center">{team.played}</td>
                        <td className="py-2 text-center">{team.goalDifference > 0 ? '+' : ''}{team.goalDifference}</td>
                        <td className="py-2 text-center font-bold">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Latest News & Analysis</h2>
          <Link href="/news" className="text-blue-600 hover:underline">
            View All Articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="bg-white border rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">⚽</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="font-bold text-lg mt-2 mb-2 line-clamp-2">
                  <Link href={`/news/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime} min read</span>
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 container mx-auto px-4">
        <div className="max-w-[728px] h-[90px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center text-gray-400">
            <p className="text-sm">Advertisement</p>
            <p className="text-xs">728x90</p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Free Downloads</h2>
          <p className="mb-6 text-blue-100">
            Get printable schedules, blank brackets, and more
          </p>
          <Link href="/downloads" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Browse Downloads →
          </Link>
        </div>
      </section>
    </div>
  )
}
