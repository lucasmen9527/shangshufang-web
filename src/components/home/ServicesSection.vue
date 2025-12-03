<script setup>
// 服务范围模块
const services = [
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>`,
    title: '党建文化设计',
    desc: '党政机关、企事业单位党建文化设计、制作、文件排版制作'
  },
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>`,
    title: '史志年鉴编纂',
    desc: '史志年鉴策划、编纂、出版印刷服务，专业团队把控质量'
  },
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>`,
    title: '画册设计印刷',
    desc: '企业画册、宣传册、产品手册设计与印刷一站式服务'
  },
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>`,
    title: '个人出书服务',
    desc: '个人作品集、回忆录、家族史等个性化出版服务'
  },
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>`,
    title: '高企申报服务',
    desc: '高新技术企业申报、专利论文申报等相关业务咨询与代办'
  },
  {
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>`,
    title: '出版印刷服务',
    desc: '与多家知名出版社合作，提供全流程出版印刷服务'
  }
]
</script>

<template>
  <section id="services" class="section-padding bg-background">
    <div class="container-custom">
      <!-- 标题 -->
      <h2 class="section-title">服务范围</h2>
      <p class="section-subtitle">
        全方位编纂出版印务服务，满足您的多元化需求
      </p>

      <!-- 服务卡片 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          <!-- 图标 -->
          <div
            class="text-primary mb-6 group-hover:text-accent transition-colors"
            v-html="service.icon"
          ></div>

          <!-- 标题 -->
          <h3 class="text-xl font-bold text-gray-800 mb-3">
            {{ service.title }}
          </h3>

          <!-- 描述 -->
          <p class="text-gray-500 leading-relaxed">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
