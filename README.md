# 尚书房官网

济南尚书房印务有限公司官方网站。

## 技术栈

- Vue 3
- Vite
- TailwindCSS 3.x
- Vue Router 4

## 页面结构

```
/                 首页（锚点导航）
/bookshelf        电子书架
/news             新闻列表（预留后端）
/news/:id         新闻详情（预留后端）
```

### 首页模块

- Hero 横幅
- 公司简介
- 服务项目
- 合作单位
- 战略伙伴（出版社）
- 电子书入口
- 联系我们

### 电子书架

- 书籍卡片展示
- 搜索过滤
- 点击跳转阅读

## 目录结构

```
src/
├── components/
│   ├── AppHeader.vue        # 顶部导航
│   ├── AppFooter.vue        # 页脚
│   └── home/                # 首页模块
├── views/
│   ├── HomeView.vue         # 首页
│   ├── BookshelfView.vue    # 电子书架
│   ├── NewsView.vue         # 新闻列表
│   └── NewsDetail.vue       # 新闻详情
├── router/index.js
├── style.css
├── App.vue
└── main.js
```

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

输出目录：`dist/`

## 部署

静态文件，可部署到 Nginx / Vercel / OSS 等。

Nginx 配置示例：

```nginx
server {
    listen 80;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
