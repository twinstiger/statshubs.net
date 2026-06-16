# statshubs.net 技术规格文档

## 技术栈

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 框架 | Next.js 14 (App Router) | SSR/SSG混合，利于SEO |
| 语言 | TypeScript | 类型安全 |
| 样式 | Tailwind CSS | 快速开发 |
| 状态 | React Hooks + Context | 轻量级 |
| 数据 | 体育API + localStorage | 外部数据源 |
| PDF | jsPDF + html2canvas | 客户端生成 |
| 图表 | Recharts | 数据可视化 |
| 广告 | Adsterra/Monetag SDK | 异步加载 |
| 分析 | Google Analytics 4 | 用户追踪 |

## 项目结构

```
statshubs.net/
├── app/
│   ├── page.tsx                    # 首页
│   ├── layout.tsx                  # 根布局
│   ├── globals.css                 # 全局样式
│   ├── schedule/
│   │   └── page.tsx                # 赛程页
│   ├── tools/
│   │   ├── timezone-converter/     # 时区转换器
│   │   ├── bracket-maker/          # 对阵生成器
│   │   ├── standings/              # 积分榜
│   │   ├── schedule-generator/     # 赛程生成器
│   │   └── teams/                  # 球队资料库
│   ├── news/
│   │   ├── page.tsx                # 资讯列表
│   │   └── [slug]/page.tsx         # 文章详情
│   ├── downloads/
│   │   └── page.tsx                # 下载中心
│   ├── privacy-policy/
│   │   └── page.tsx                # 隐私政策
│   ├── terms/
│   │   └── page.tsx                # 服务条款
│   ├── disclaimer/
│   │   └── page.tsx                # 免责声明
│   ├── about/
│   │   └── page.tsx                # 关于我们
│   └── contact/
│       └── page.tsx                # 联系我们
├── components/
│   ├── ui/                         # UI基础组件
│   ├── tools/                      # 工具相关组件
│   ├── ads/                        # 广告组件
│   └── affiliate/                  # Affiliate组件
├── lib/
│   ├── api.ts                      # API封装
│   ├── data.ts                     # 模拟数据
│   └── utils.ts                    # 工具函数
├── public/
│   ├── images/                     # 图片资源
│   └── fonts/                      # 字体
└── types/
    └── index.ts                    # TypeScript类型
```

## 核心API接口

```typescript
// 赛程数据
GET /api/matches
GET /api/matches/[id]
GET /api/matches/by-date?date=YYYY-MM-DD
GET /api/matches/by-team?team=team-slug

// 球队数据
GET /api/teams
GET /api/teams/[slug]
GET /api/teams/[slug]/squad

// 积分榜
GET /api/standings
GET /api/standings/group/[group]

// 比分实时
GET /api/live-scores

// 资讯
GET /api/posts
GET /api/posts/[slug]
```

## 数据模型

```typescript
interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
  group: string;
  stage: 'group' | 'round16' | 'quarter' | 'semi' | 'final';
  status: 'scheduled' | 'live' | 'finished';
  score?: { home: number; away: number };
}

interface Team {
  slug: string;
  name: string;
  flag: string;
  group: string;
  squad: Player[];
  manager: string;
}

interface Player {
  name: string;
  position: string;
  age: number;
  club: string;
  value?: string;
}

interface Standing {
  group: string;
  teams: {
    team: Team;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
  }[];
}

interface Article {
  slug: string;
  title: string;
  category: 'preview' | 'analysis' | 'guide' | 'recap' | 'fan';
  content: string;
  author: string;
  publishedAt: string;
  featuredImage?: string;
  tags: string[];
}
```

## 性能指标

| 指标 | 目标 | 优化方案 |
|------|------|---------|
| LCP | <2.5s | 预加载关键资源 |
| FID | <100ms | 减少主线程阻塞 |
| CLS | <0.1 | 图片固定尺寸 |
| TTFB | <600ms | CDN加速 |
| 页面大小 | <500KB | 代码分割+压缩 |

## SEO配置

- 动态Meta标签
- Open Graph配置
- JSON-LD结构化数据
- Sitemap自动生成
- robots.txt配置
- 规范URL设置
