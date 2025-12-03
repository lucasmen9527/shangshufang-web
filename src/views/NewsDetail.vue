<script setup>
// 新闻详情页 - 预留给后端接口
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const newsId = route.params.id

// 模拟数据，后续对接后端接口
const newsDetail = ref({
  id: newsId,
  title: '尚书房与山东省统计局达成年度合作协议',
  content: `
    <p>近日，济南尚书房印务有限公司与山东省统计局正式签署年度合作协议，将为其提供全方位的编纂出版服务。</p>
    <p>根据协议内容，尚书房印务将承担山东省统计局2024年度统计年鉴的编纂、设计、印刷工作，这是双方连续第五年开展深度合作。</p>
    <p>尚书房印务负责人表示，公司将继续秉承"优质服务、专业团队、一流设备、完善管理、上乘质量、合理价位"的经营理念，为合作单位提供最优质的服务。</p>
    <p>作为省政府和济南市政府定点采购单位，尚书房印务始终坚持高标准、严要求，在史志年鉴编纂领域积累了丰富的经验，赢得了众多机关事业单位的信任和好评。</p>
  `,
  date: '2024-01-15',
  category: '公司动态',
  author: '尚书房'
})
</script>

<template>
  <div class="pt-20">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary to-secondary py-16">
      <div class="container-custom text-center text-white">
        <div class="flex items-center justify-center gap-4 mb-4">
          <span class="bg-white/20 px-3 py-1 rounded text-sm">{{ newsDetail.category }}</span>
          <span class="text-gray-200 text-sm">{{ newsDetail.date }}</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold max-w-4xl mx-auto">{{ newsDetail.title }}</h1>
      </div>
    </section>

    <!-- 文章内容 -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <!-- 返回按钮 -->
          <router-link
            to="/news"
            class="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>返回新闻列表</span>
          </router-link>

          <!-- 文章正文 -->
          <article class="prose prose-lg max-w-none">
            <div v-html="newsDetail.content" class="news-content"></div>
          </article>

          <!-- 分享/返回 -->
          <div class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <router-link
              to="/news"
              class="btn-outline"
            >
              返回列表
            </router-link>
            <div class="text-gray-400 text-sm">
              发布者：{{ newsDetail.author }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-content :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #4b5563;
}

.news-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a3a6e;
  margin: 2rem 0 1rem;
}

.news-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a3a6e;
  margin: 1.5rem 0 0.75rem;
}

.news-content :deep(ul),
.news-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.news-content :deep(li) {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

.news-content :deep(img) {
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}
</style>
