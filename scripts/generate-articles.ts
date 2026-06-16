// 批量生成100+篇资讯文章
import { Article } from '@/types'

const categories = ['preview', 'analysis', 'guide', 'recap', 'fan'] as const
const teams = [
  { name: 'Argentina', group: 'A' },
  { name: 'Brazil', group: 'C' },
  { name: 'France', group: 'C' },
  { name: 'Germany', group: 'B' },
  { name: 'Spain', group: 'E' },
  { name: 'England', group: 'C' },
  { name: 'Portugal', group: 'F' },
  { name: 'Netherlands', group: 'A' },
  { name: 'Italy', group: 'B' },
  { name: 'Belgium', group: 'E' },
  { name: 'Croatia', group: 'D' },
  { name: 'Uruguay', group: 'H' },
  { name: 'Mexico', group: 'A' },
  { name: 'USA', group: 'C' },
  { name: 'Canada', group: 'E' },
  { name: 'Japan', group: 'G' },
  { name: 'South Korea', group: 'F' },
  { name: 'Australia', group: 'B' },
  { name: 'Morocco', group: 'F' },
  { name: 'Senegal', group: 'G' },
]

const articleTemplates = {
  preview: [
    {
      title: '{team} World Cup 2026: Match Preview and Prediction',
      excerpt: 'Analysis of {team}\'s chances, key players, and predicted outcome in their World Cup 2026 campaign.',
      content: `As the 2026 FIFA World Cup approaches, all eyes are on {team} as they prepare to compete on the world's biggest stage. This comprehensive preview covers everything you need to know about {team}'s tournament prospects.

## Team Overview

{team} enters the 2026 World Cup with high expectations following their recent international performances. The squad combines experienced veterans with exciting young talent, creating a balanced team capable of making a deep run in the tournament.

## Key Players to Watch

The success of {team} will largely depend on the performances of their key players. The team features several world-class individuals who have been performing at the highest level for their clubs throughout the season.

## Tactical Analysis

Manager's tactical approach will be crucial in determining {team}'s success. The team is expected to employ a formation that maximizes their strengths while minimizing vulnerabilities against potential opponents.

## Group Stage Prospects

In Group {group}, {team} will face stiff competition from other teams. The objective will be to advance to the knockout stages, with a potential deep run being the ultimate goal.

## Prediction

{team} is well-positioned to advance from the group stage and could potentially reach the quarterfinals or beyond depending on their draw and performance.`
    },
    {
      title: 'World Cup 2026: {team} vs Opponent - Head-to-Head Analysis',
      excerpt: 'Detailed head-to-head statistics and analysis for {team}\'s World Cup 2026 matchup.',
      content: `This detailed analysis breaks down the upcoming World Cup 2026 matchup between {team} and their opponent, examining historical encounters, current form, and key factors that could influence the result.

## Historical Encounters

{team} and their opponent have met numerous times in international competitions, with both teams having enjoyed their share of victories. Recent encounters have been closely contested, setting the stage for an exciting World Cup clash.

## Current Form Analysis

Both teams enter the World Cup in good form, having performed well in their respective qualifying campaigns. This section analyzes recent results and performances that could impact the match.

## Key Matchups

Individual battles across the pitch could determine the outcome of this crucial World Cup fixture. We examine the most important player matchups and how they might influence the result.

## Tactical Preview

The tactical approach both teams adopt will be crucial. We analyze potential formations, strategies, and in-game adjustments that could prove decisive.

## Prediction and Betting Odds

Based on our comprehensive analysis, we provide predictions and examine the betting odds for this World Cup encounter.`
    }
  ],
  analysis: [
    {
      title: '{team} Squad Analysis: World Cup 2026 Roster Breakdown',
      excerpt: 'Complete breakdown of {team}\'s World Cup 2026 squad, including player strengths, weaknesses, and tournament impact.',
      content: `A comprehensive analysis of {team}'s squad for the 2026 FIFA World Cup, examining each position and the overall squad depth.

## Goalkeeping Department

{team}'s goalkeeping options provide solidity between the posts. The primary goalkeeper has been a reliable presence throughout qualifying, with experience at the highest level.

## Defensive Line

The backline features a mix of youth and experience, with several players having established themselves as elite defenders at club level. Set piece defense has been a particular strength.

## Midfield Engine

The midfield is where {team} truly excels, with creative talents capable of controlling games and scoring crucial goals. The depth in this area allows for tactical flexibility.

## Attacking Options

Up front, {team} possesses multiple goal-scoring threats who can hurt opponents in various ways. The forward line combines pace, technique, and finishing ability.

## Overall Assessment

{team}'s squad is well-balanced and has the quality to compete with the best teams in the tournament. Success will depend on maintaining consistency and avoiding key injuries.`
    },
    {
      title: 'World Cup 2026: Why {team} Could Win It All',
      excerpt: 'An in-depth analysis of {team}\'s championship credentials for the 2026 World Cup.',
      content: `An analytical deep-dive into why {team} could emerge victorious at the 2026 FIFA World Cup, examining all factors that could contribute to their success.

## Tactical Excellence

{team} has developed a cohesive tactical identity that maximizes the abilities of their squad. The coaching staff has implemented a system that both defends well and creates numerous scoring opportunities.

## Squad Depth

Unlike many competitors, {team} has quality options in every position. This depth will be crucial in a tournament where five group stage matches require squad rotation.

## Experience Factor

Key players have experienced World Cup pressure before, providing invaluable experience that could prove decisive in tight knockout matches.

## Mental Fortitude

The psychological aspect of tournament football is often underestimated. {team} has shown resilience in difficult situations, suggesting they have the mental strength for a championship run.

## Draw Advantage

Depending on their group stage draw, {team} could have a favorable path to the latter stages of the competition.

## Conclusion

While no team can be guaranteed success, {team} possesses all the attributes necessary to lift the World Cup trophy in 2026.`
    }
  ],
  guide: [
    {
      title: 'Complete Guide to {team}\'s World Cup 2026 Campaign',
      excerpt: 'Everything you need to know about following {team} at the 2026 World Cup, from fixtures to key information.',
      content: `Your complete guide to following {team} throughout their 2026 FIFA World Cup campaign, including all essential information for fans.

## World Cup 2026 Overview

The 2026 World Cup features 48 teams competing across three host nations - USA, Canada, and Mexico. {team} is among the favorites to make a deep run in the tournament.

## {team}'s Group Stage Fixtures

{team} has been drawn in Group {group}, where they will face three opponents in their quest to advance to the knockout stages.

## How to Watch {team}'s Matches

Fans can follow {team}'s World Cup journey through various broadcasting partners. This guide provides information on official broadcast options.

## Key Match Dates

Mark your calendars for the crucial dates when {team} will be in action. We provide a complete fixture list with kickoff times.

## Player Watch List

Several {team} players are worth keeping an eye on throughout the tournament, as they could play pivotal roles in their team's success.

## Tournament Predictions

We analyze {team}'s potential path through the tournament and provide predictions for their performance.`
    },
    {
      title: 'World Cup 2026 Time Zone Guide: Following {team} Around the World',
      excerpt: 'Essential time zone information for fans watching {team}\'s World Cup 2026 matches from any location.',
      content: `The 2026 FIFA World Cup spans multiple time zones across three host nations. This guide helps you never miss a moment of {team}'s action.

## Understanding World Cup 2026 Time Zones

The World Cup 2026 will feature matches across North American time zones, with games in Eastern, Central, Mountain, and Pacific Time zones.

## {team} Match Times by Region

We provide complete kickoff times for all {team}'s matches in various regional time zones, ensuring you can follow the action no matter where you are.

## North American Time Zones
- Eastern Time (ET)
- Central Time (CT)
- Mountain Time (MT)
- Pacific Time (PT)

## European Time Zones
- UK/GMT
- Central European Time (CET)
- Eastern European Time (EET)

## Asian/Oceanian Time Zones
- Japan Standard Time (JST)
- China Standard Time (CST)
- Australian Eastern Time (AEST)

## Best Viewing Practices

Tips for maximizing your World Cup viewing experience while managing different time zones and schedules.`
    }
  ],
  fan: [
    {
      title: 'Ultimate Guide to Watching {team} at World Cup 2026',
      excerpt: 'Tips, tricks, and recommendations for the ultimate {team} fan experience at the 2026 World Cup.',
      content: `Everything a {team} fan needs to know for the 2026 FIFA World Cup, from match viewing to fan activities.

## Setting Up Your Viewing Experience

Create the perfect home viewing setup for watching {team}'s World Cup matches. We cover TV recommendations, sound systems, and streaming options.

## Hosting a {team} Watch Party

Tips for organizing an unforgettable watch party with friends and fellow {team} supporters. Includes food and drink recommendations.

## {team} Fan Gear and Merchandise

Essential merchandise and gear to show your {team} support throughout the tournament. Official jerseys, flags, and accessories.

## Travel to World Cup 2026

For fans making the trip to see {team} live, we provide information on venues, accommodation, and local attractions.

## Connecting with Other Fans

Finding and connecting with fellow {team} supporters in your area and around the world through official and fan communities.

## Budget-Friendly Options

Watching the World Cup doesn't have to break the bank. We provide tips for enjoying {team}'s campaign on any budget.`
    },
    {
      title: 'Best {team} World Cup Moments: A Fan\'s Journey',
      excerpt: 'Reliving the greatest {team} World Cup moments and looking ahead to 2026.',
      content: `A nostalgic journey through {team}'s greatest World Cup moments while building anticipation for the 2026 tournament.

## Historic Triumphs

{team} has provided fans with countless memorable World Cup moments over the years. We revisit the most iconic victories and performances.

## Heartbreaking Defeats

Every great team has experienced disappointment at the World Cup. We acknowledge {team}'s most painful tournament exits.

## Rising Stars of 2026

New generations of {team} players are ready to create their own World Cup memories. Meet the young talents who could become future legends.

## What 2026 Could Bring

Looking ahead to the 2026 World Cup and what {team} might achieve. We analyze their chances and potential for new historic moments.

## Generational Perspectives

How different generations of {team} fans experience the World Cup, from veteran supporters to those watching their first tournament.

## Creating New Memories

As we approach 2026, we discuss what kind of memories {team} fans hope to create during the upcoming World Cup.`
    }
  ]
}

function generateArticle(template: any, team: typeof teams[0], category: string): Article {
  const title = template.title.replace('{team}', team.name).replace('{group}', team.group)
  const excerpt = template.excerpt.replace('{team}', team.name)
  const content = template.content
    .replace(/{team}/g, team.name)
    .replace(/{group}/g, team.group)

  const publishDate = new Date(2026, 5, Math.floor(Math.random() * 20) + 1)
    .toISOString()
    .split('T')[0]

  return {
    slug: `${team.name.toLowerCase().replace(/\s+/g, '-')}-world-cup-2026-${category}-${Date.now()}`,
    title,
    excerpt,
    category: category as any,
    content,
    author: 'StatsHubs Editorial Team',
    publishedAt: publishDate,
    tags: [team.name, 'World Cup 2026', category, team.group],
    readTime: Math.floor(content.split(/\s+/).length / 200) + 3
  }
}

// Generate all articles
function generateAllArticles(): Article[] {
  const articles: Article[] = []

  // Generate articles for each team
  teams.forEach((team) => {
    Object.keys(articleTemplates).forEach((category) => {
      const templates = articleTemplates[category as keyof typeof articleTemplates]
      templates.forEach((template: any) => {
        articles.push(generateArticle(template, team, category))
      })
    })
  })

  // Add tournament-wide articles
  const tournamentArticles: Article[] = [
    {
      slug: 'world-cup-2026-complete-guide',
      title: 'Complete World Cup 2026 Guide: Everything You Need to Know',
      excerpt: 'The ultimate guide to the 2026 FIFA World Cup covering all aspects of the tournament from teams to venues.',
      category: 'guide',
      content: 'Full guide content...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-01',
      tags: ['World Cup 2026', 'Guide', 'Tournament'],
      readTime: 15
    },
    {
      slug: 'world-cup-2026-format-changes',
      title: 'World Cup 2026 Format Explained: 48 Teams, New Rules',
      excerpt: 'Understanding the major format changes for the 2026 World Cup including the expanded group stage and new qualification rules.',
      category: 'guide',
      content: 'Format explanation...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-01',
      tags: ['World Cup 2026', 'Format', 'Rules'],
      readTime: 8
    },
    {
      slug: 'world-cup-2026-host-cities',
      title: 'World Cup 2026 Host Cities: Complete Venue Guide',
      excerpt: 'A comprehensive guide to all World Cup 2026 host cities and venues across USA, Canada, and Mexico.',
      category: 'guide',
      content: 'Venue guide...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-01',
      tags: ['World Cup 2026', 'Venues', 'Host Cities'],
      readTime: 12
    },
    {
      slug: 'world-cup-2026-favorites',
      title: 'World Cup 2026 Favorites: Early Tournament Predictions',
      excerpt: 'Analysis of the top favorites to win the 2026 World Cup based on squad strength and recent form.',
      category: 'analysis',
      content: 'Predictions content...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-02',
      tags: ['World Cup 2026', 'Predictions', 'Favorites'],
      readTime: 10
    },
    {
      slug: 'world-cup-2026-dark-horses',
      title: 'World Cup 2026 Dark Horses: Teams to Watch',
      excerpt: 'Underrated teams that could surprise at the 2026 World Cup and potentially make deep tournament runs.',
      category: 'analysis',
      content: 'Dark horses content...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-02',
      tags: ['World Cup 2026', 'Dark Horses', 'Analysis'],
      readTime: 8
    },
    {
      slug: 'world-cup-2026-opening-ceremony',
      title: 'World Cup 2026 Opening Ceremony: What to Expect',
      excerpt: 'Preview of the spectacular opening ceremony for the 2026 World Cup in Mexico City.',
      category: 'fan',
      content: 'Opening ceremony content...',
      author: 'StatsHubs Editorial Team',
      publishedAt: '2026-06-10',
      tags: ['World Cup 2026', 'Opening Ceremony', 'Events'],
      readTime: 5
    }
  ]

  return [...articles, ...tournamentArticles]
}

export const generatedArticles = generateAllArticles()
console.log(`Generated ${generatedArticles.length} articles`)
