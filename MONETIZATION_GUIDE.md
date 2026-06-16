# 商业化配置指南

## 1. Adsterra/Monetag 广告集成

### 注册账号
1. 访问 [Adsterra](https://adsterra.com/) 或 [Monetag](https://monetag.com/)
2. 注册发布者账号
3. 创建网站并审核通过

### 获取广告代码
1. 登录 Adsterra 后台
2. 进入 "Websites" → 选择你的网站
3. 点击 "Create Placement" 创建广告位
4. 选择广告格式（Banner/Interstitial/Native）
5. 复制生成的 Zone ID 和广告代码

### 配置步骤

#### 方案 A: 直接嵌入（简单）
1. 获取广告代码后，替换 `components/ads/Adsterra.tsx` 中的示例代码
2. 将广告脚本添加到 `app/layout.tsx`:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Adsterra 广告脚本 */}
        <script
          src="//ads.adsterra.com/display.php?zoneid=YOUR_ZONE_ID"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

#### 方案 B: 动态加载（推荐）
编辑 `components/ads/Adsterra.tsx`:

```tsx
useEffect(() => {
  const adsterraScript = document.createElement('script')
  adsterraScript.src = '//ads.adsterra.com/display.php?zoneid=YOUR_ZONE_ID'
  adsterraScript.async = true
  document.body.appendChild(adsterraScript)

  return () => {
    // 清理
    document.body.removeChild(adsterraScript)
  }
}, [])
```

### 广告位尺寸
- 728x90 - 横幅广告（Leaderboard）
- 300x250 - 中矩形广告（Medium Rectangle）
- 160x600 - 侧边栏广告（Skyscraper）

---

## 2. Amazon Associates 联盟营销

### 注册账号
1. 访问 [Amazon Associates](https://affiliate-program.amazon.com/)
2. 完成账号注册和网站审核
3. 获取你的 Associate Tag

### 配置多语言标签
编辑 `components/affiliate/AmazonAssociates.tsx`:

```tsx
const AMAZON_TAGS = {
  en: 'YOUR_TAG-20',      // 英文
  es: 'YOUR_TAG-21',      // 西班牙语
  fr: 'YOUR_TAG-21',      // 法语
  de: 'YOUR_TAG-21',      // 德语
  ja: 'YOUR_TAG-22',      // 日语
  pt: 'YOUR_TAG-21',      // 葡萄牙语
}
```

### 添加联盟产品
1. 在 Amazon Associates 后台搜索产品
2. 获取产品 ASIN
3. 编辑 `affiliateProducts` 对象添加产品

```tsx
{
  id: 'unique-id',
  asin: 'B09V3KXJPB',    // Amazon 产品 ASIN
  name: 'Product Name',
  description: 'Description',
  price: '$XX.XX',
  image: 'https://...'     // 产品图片 URL
}
```

### 使用组件

```tsx
import { ProductRecommendation, AffiliateSection } from '@/components/monetization'

// 单个产品推荐
<ProductRecommendation lang="en" />

// 产品列表
<AffiliateSection lang="en" title="Recommended Products" />
```

---

## 3. 最佳实践

### 广告放置位置
- ✅ 文章内容之间（避免首屏）
- ✅ 侧边栏
- ✅ 页脚上方
- ❌ 不要放在导航附近
- ❌ 不要放太多（影响用户体验）

### 合规要求
- 添加广告标识（如 "Advertisement"）
- 添加联盟链接披露声明
- 遵守各平台政策

### 性能优化
- 使用 `async` 加载广告脚本
- 考虑延迟加载广告
- 监控广告对加载速度的影响

---

## 4. 收入优化建议

1. **A/B 测试** - 测试不同广告位置
2. **广告刷新** - 设置广告自动刷新时间
3. **优化填充率** - 确保广告位有充足广告填充
4. **多平台** - 同时接入多个广告平台
5. **联盟结合** - 将广告和联盟营销结合
