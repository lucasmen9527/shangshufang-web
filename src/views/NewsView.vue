<script setup>
// 新闻列表页 - 预留给后端接口
import { ref } from 'vue'

// 模拟数据，后续对接后端接口
const newsList = ref([
  {
    id: 1,
    title: '尚书房与山东省统计局达成年度合作协议',
    summary: '近日，济南尚书房印务有限公司与山东省统计局正式签署年度合作协议，将为其提供全方位的编纂出版服务...',
    date: '2024-01-15',
    category: '公司动态'
  },
  {
    id: 2,
    title: '2024年史志年鉴编纂工作正式启动',
    summary: '新年伊始，尚书房印务启动2024年度史志年鉴编纂工作，多个项目同步推进...',
    date: '2024-01-10',
    category: '项目动态'
  },
  {
    id: 3,
    title: '尚书房荣获济南市优秀服务企业称号',
    summary: '在2023年度济南市服务业评选中，尚书房印务凭借优质的服务和良好的口碑荣获优秀服务企业称号...',
    date: '2024-01-05',
    category: '荣誉资质'
  }
])

const categories = ['全部', '公司动态', '项目动态', '荣誉资质', '行业资讯']
const activeCategory = ref('全部')

const filteredNews = () => {
  if (activeCategory.value === '全部') {
    return newsList.value
  }
  return newsList.value.filter(item => item.category === activeCategory.value)
}
</script>

<template>
  <div class="pt-20">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary to-secondary py-16">
      <div class="container-custom text-center text-white">
        <h1 class="text-4xl font-bold mb-4">新闻动态</h1>
        <p class="text-gray-200">了解尚书房最新资讯</p>
      </div>
    </section>

    <!-- 新闻列表 -->
    <section class="section-padding">
      <div class="container-custom">
        <!-- 分类筛选 -->
        <div class="flex flex-wrap gap-4 mb-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- 新闻卡片列表 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link
            v-for="news in filteredNews()"
            :key="news.id"
            :to="`/news/${news.id}`"
            class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
          >
            <!-- 图片占位 -->
            <div class="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <svg class="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>

            <!-- 内容 -->
            <div class="p-6">
              <div class="flex items-center gap-4 mb-3">
                <span class="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {{ news.category }}
                </span>
                <span class="text-xs text-gray-400">{{ news.date }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {{ news.title }}
              </h3>
              <p class="text-gray-500 text-sm line-clamp-2">
                {{ news.summary }}
              </p>
            </div>
          </router-link>
        </div>

        <!-- 暂无数据 -->
        <div v-if="filteredNews().length === 0" class="text-center py-20 text-gray-400">
          暂无相关新闻
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
