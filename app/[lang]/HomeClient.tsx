'use client'

import Link from 'next/link'
import { matches, standings, allArticles } from '@/lib/data'
import { useState } from 'react'
import { Language } from '@/lib/i18n'
import { getTranslations, formatString } from '@/lib/translations'

interface HomeClientProps {
  lang: Language
}

export default function HomeClient({ lang }: HomeClientProps) {
  const [currentDate] = useState('2026-06-16')
  const t = getTranslations(lang)
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

  // 计算距开幕式
  const openingDate = new Date('2026-06-11')
  const today = new Date(currentDate)
  const daysSinceOpening = Math.floor((today.getTime() - openingDate.getTime()) / (1000 * 60 * 60 * 24))

  // 计算距决赛
  const finalDate = new Date('2026-07-19')
  const daysToFinal = Math.ceil((finalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-stadium.jpeg"
            alt="Football stadium"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/75 to-blue-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full">
                🏆 USA • Canada • Mexico 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {t.worldCup2026}
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              {t.yourUltimateCompanion}
            </p>
          </div>

          {/* Status Banner */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20 shadow-2xl">
            {daysSinceOpening >= 0 ? (
              <div className="text-center">
                <p className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {t.tournamentInProgress}
                </p>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {formatString(t.dayOfWorldCup, { n: daysSinceOpening + 1 })}
                </p>
                <p className="text-xl mt-2 text-blue-100">
                  {daysToFinal > 0 ? formatString(t.daysUntilFinal, { n: daysToFinal }) : t.finalToday}
                </p>
                {todayMatches.length > 0 && (
                  <p className="mt-4 inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full">
                    📅 {formatString(t.matchesToday, { n: todayMatches.length })}
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-5xl font-bold">{Math.abs(daysSinceOpening)}</p>
                <p className="text-xl text-blue-200 mt-2">Days Until Opening Match</p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-3xl font-bold">{daysSinceOpening >= 0 ? '🔥' : Math.abs(daysSinceOpening)}</p>
              <p className="text-sm text-blue-200 mt-1">{t.status}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-3xl font-bold">{matches.length}</p>
              <p className="text-sm text-blue-200 mt-1">{t.totalMatches}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-3xl font-bold">{daysToFinal > 0 ? daysToFinal : 0}</p>
              <p className="text-sm text-blue-200 mt-1">{t.daysToFinal}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-3xl font-bold">48</p>
              <p className="text-sm text-blue-200 mt-1">{t.teamsCount}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Matches */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {todayMatches.length > 0 ? t.todaysMatches : t.upcomingMatches}
          </h2>
          <Link href={`/${lang === 'en' ? '' : lang + '/'}schedule`} className="text-blue-600 hover:underline">
            {t.viewFullSchedule}
          </Link>
        </div>

        {upcomingMatches.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => {
              const matchDate = new Date(match.date)
              const today = new Date(currentDate)
              const diffDays = Math.ceil((matchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

              return (
                <div key={match.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                      {match.group ? `Group ${match.group}` : match.stage}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      diffDays === 0 ? 'bg-green-100 text-green-700' :
                      diffDays === 1 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {diffDays === 0 ? '⚡ Today' : diffDays === 1 ? '📅 Tomorrow' : `🗓 ${diffDays} days`}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-50 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚽</span>
                      </div>
                      <p className="font-semibold text-lg">{match.homeTeam}</p>
                    </div>
                    <div className="px-4 text-2xl font-bold text-gray-300">VS</div>
                    <div className="text-center flex-1">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-50 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚽</span>
                      </div>
                      <p className="font-semibold text-lg">{match.awayTeam}</p>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="font-medium text-gray-700">{match.date} • {match.time}</p>
                    <p className="text-sm text-gray-500 mt-1">{match.venue}, {match.city}</p>
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

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t.essentialTools}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Powerful tools to enhance your World Cup experience</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/timezone-converter`} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-100 transition-colors">
                🌍
              </div>
              <h3 className="font-semibold mb-2">{t.timezoneConverter}</h3>
              <p className="text-sm text-gray-500">{t.convertMatchTimes}</p>
            </Link>

            <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/bracket-maker`} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-yellow-100 transition-colors">
                🏆
              </div>
              <h3 className="font-semibold mb-2">{t.bracketMaker}</h3>
              <p className="text-sm text-gray-500">{t.predictResults}</p>
            </Link>

            <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/standings`} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-green-100 transition-colors">
                📊
              </div>
              <h3 className="font-semibold mb-2">{t.standings}</h3>
              <p className="text-sm text-gray-500">{t.liveTracking}</p>
            </Link>

            <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/schedule-generator`} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-purple-100 transition-colors">
                📅
              </div>
              <h3 className="font-semibold mb-2">{t.schedule}</h3>
              <p className="text-sm text-gray-500">{t.browseDownloads}</p>
            </Link>

            <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/teams`} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-red-100 transition-colors">
                👥
              </div>
              <h3 className="font-semibold mb-2">{t.teams}</h3>
              <p className="text-sm text-gray-500">{t.teamSquads}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Standings Preview */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t.groupStandings}</h2>
          <Link href={`/${lang === 'en' ? '' : lang + '/'}tools/standings`} className="text-blue-600 hover:underline">
            {t.viewAllStandings}
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
                      <th className="text-center py-2">{t.played}</th>
                      <th className="text-center py-2">GD</th>
                      <th className="text-center py-2">{t.points}</th>
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
          <h2 className="text-2xl font-bold">{t.latestNews}</h2>
          <Link href={`/${lang === 'en' ? '' : lang + '/'}news`} className="text-blue-600 hover:underline">
            {t.viewAllArticles}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article, idx) => (
            <article key={article.slug} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={[
                    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
                    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
                    'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600'
                  ][idx]}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mt-2 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/${lang === 'en' ? '' : lang + '/'}news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                  <span className="flex items-center gap-1">
                    <span>📖</span> {article.readTime} min
                  </span>
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Downloads Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-stadium.jpeg"
            alt="Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/90 to-blue-800/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.freeDownloads}</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get printable schedules, blank brackets, wallpapers and more
            </p>
            <Link href={`/${lang === 'en' ? '' : lang + '/'}downloads`} className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>📥</span>
              {t.browseDownloads}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
