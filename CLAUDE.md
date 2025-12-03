# 尚书房官网项目 - Claude Code 上下文

> 项目名称: shangshufang-web
> 创建时间: 2025-11-30
> 技术栈: Vue 3 + Vite + TailwindCSS 3.x + Vue Router 4

---

## 项目概述

济南尚书房印务有限公司官方网站，一个企业展示型网站。

### 公司信息

- **公司名称**: 济南尚书房印务有限公司
- **业务领域**: 编纂出版印务服务
- **资质**: 省政府定点采购单位、济南市政府定点采购单位
- **Slogan**: 选择尚书房，服务一站式

### 主要服务

1. 党建文化设计制作
2. 史志年鉴策划编纂
3. 画册设计印刷
4. 个人出书服务
5. 高企申报、专利论文申报
6. 出版印刷服务

### 合作单位

山东省环保厅、山东省统计局、潍坊市文旅局、潍坊市档案馆、临朐县党史研究中心、聊城市统计局、泰安市统计局、邹平统计局、冠县统计局、东阿统计局、济滕监狱、寒亭人大

### 战略合作伙伴

- **协会**: 山东出版协会、山东省党史史志专家、山东省诗词学会
- **出版社**: 方志出版社、中国文史出版社、团结出版社、线装书局、新华出版社、北京燕山出版社、黄海数字出版社

---

## 技术架构

```
前端: Vue 3 + Vite + TailwindCSS 3.x + Vue Router 4
后端: 预留 Spring Boot 接口（新闻动态、联系表单）
```

### 目录结构

```
shangshufang-web/
├── src/
│   ├── assets/images/       # 图片资源
│   │   ├── logo.png         # 彩色 Logo
│   │   └── logo-white.png   # 白色 Logo（深色背景用）
│   ├── components/
│   │   ├── AppHeader.vue    # 顶部导航（固定、滚动变色）
│   │   ├── AppFooter.vue    # 页脚
│   │   └── home/            # 首页模块组件
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ServicesSection.vue
│   │       ├── PartnersSection.vue
│   │       ├── PublishersSection.vue
│   │       ├── EbookSection.vue
│   │       └── ContactSection.vue
│   ├── views/
│   │   ├── HomeView.vue     # 首页
│   │   ├── NewsView.vue     # 新闻列表（预留后端）
│   │   └── NewsDetail.vue   # 新闻详情（预留后端）
│   ├── router/index.js
│   ├── style.css            # TailwindCSS 入口 + 自定义样式
│   ├── App.vue
│   └── main.js
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 配色方案

基于 Logo 提取的配色：

| 变量名       | 用途   | 色值                 |
| ------------ | ------ | -------------------- |
| `primary`    | 主色调 | `#1a3a6e` (深海军蓝) |
| `secondary`  | 次要色 | `#2c5aa0` (皇家蓝)   |
| `accent`     | 强调色 | `#c9a962` (金色)     |
| `background` | 背景色 | `#faf9f7` (米白)     |

---

## 路由配置

| 路径        | 组件       | 说明             |
| ----------- | ---------- | ---------------- |
| `/`         | HomeView   | 首页（锚点导航） |
| `/news`     | NewsView   | 新闻列表         |
| `/news/:id` | NewsDetail | 新闻详情         |

### 首页锚点

`/#hero`, `/#about`, `/#services`, `/#partners`, `/#publishers`, `/#ebook`, `/#contact`

---

## 外部链接

- **电子书平台**: https://book.kidoit.cn/

---

## 待办事项 (TODO)

### 高优先级

- [ ] 替换 Logo 图片（当前为占位符）
- [ ] 补充真实联系方式（地址、电话、邮箱）
- [ ] 添加 favicon.ico

### 后端对接

- [ ] 联系表单提交接口 (POST /api/contact)
- [ ] 新闻列表接口 (GET /api/news)
- [ ] 新闻详情接口 (GET /api/news/:id)

### 优化项

- [ ] 添加加载动画
- [ ] SEO 优化（Open Graph、结构化数据）
- [ ] 图片懒加载
- [ ] 移动端适配微调

---

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

## 部署说明

构建后为纯静态文件，可部署到：

- Nginx
- Vercel
- 阿里云 OSS
- 腾讯云 COS

```bash
npm run build
# 输出目录: dist/
```

---

## 注意事项

1. Logo 文件需要两个版本：彩色版和白色版
2. 新闻页面目前使用模拟数据，对接后端后需修改
3. 联系表单提交目前只是 alert，需对接后端接口
