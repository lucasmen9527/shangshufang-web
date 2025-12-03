<script setup>
// 合作单位模块
const partners = [
  '山东省环保厅',
  '山东省统计局',
  '潍坊市文旅局',
  '潍坊市档案馆',
  '临朐县党史研究中心',
  '聊城市统计局',
  '泰安市统计局',
  '邹平统计局',
  '冠县统计局',
  '东阿统计局',
  '济滕监狱',
  '寒亭人大'
]
</script>

<template>
  <section id="partners" class="section-padding bg-white">
    <div class="container-custom">
      <!-- 标题 -->
      <h2 class="section-title">合作单位</h2>
      <p class="section-subtitle">
        与众多机关事业单位建立长期稳定合作关系
      </p>

      <!-- 合作单位标签 -->
      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        <span
          v-for="partner in partners"
          :key="partner"
          class="bg-background border border-gray-200 px-6 py-3 rounded-full text-gray-700 hover:border-primary hover:text-primary transition-colors"
        >
          {{ partner }}
        </span>
      </div>

      <!-- 资质说明 -->
      <div class="mt-12 flex flex-wrap justify-center gap-8">
        <div class="flex items-center gap-3 text-primary">
          <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span class="font-medium">省政府定点采购单位</span>
        </div>
        <div class="flex items-center gap-3 text-primary">
          <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span class="font-medium">济南市政府定点采购单位</span>
        </div>
      </div>
    </div>
  </section>
</template>
