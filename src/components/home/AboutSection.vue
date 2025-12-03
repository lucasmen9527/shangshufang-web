<!--
 * @Descripttion: 
 * @Author: Lucas.men
 * @version: v1.0
 * @Date: 2025-11-30 12:23:27
 * @LastEditors: Lucas.men
 * @LastEditTime: 2025-11-30 15:31:32
-->
<script setup>
// 关于我们模块
const features = [
  {
    title: "专业团队",
    desc: "20余名专业员工",
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>`,
  },
  {
    title: "资质认证",
    desc: "省市政府定点采购",
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>`,
  },
  {
    title: "行业经验",
    desc: "深耕编纂出版多年",
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>`,
  },
  {
    title: "服务宗旨",
    desc: "一站式全方位服务",
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>`,
  },
];
</script>

<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <!-- 标题 -->
      <h2 class="section-title">关于我们</h2>
      <p class="section-subtitle">深耕齐鲁大地，专注编纂出版印务服务</p>

      <!-- 内容区 -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧文字 -->
        <div>
          <p class="text-gray-600 leading-relaxed mb-6">
            济南尚书房印务有限公司，由一批从事编纂出版印刷行业多年，深谙齐鲁大地本土文化的优秀中青年人士组建的一家全方位编纂出版印务服务机构！
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            目前公司是<span class="text-primary font-medium"
              >省政府定点采购单位</span
            >、<span class="text-primary font-medium"
              >济南市政府定点采购单位</span
            >，与众多机关事业单位建立了长期合作关系。
          </p>
          <p class="text-gray-600 leading-relaxed">
            <span class="text-accent font-medium"
              >优质服务、专业团队、一流设备、完善管理、上乘质量、合理价位</span
            >铸就尚书房市场品牌，赢得客户信任和赞誉。
          </p>
        </div>

        <!-- 右侧特点卡片 -->
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-background p-6 rounded-xl text-center hover:shadow-lg transition-shadow group"
          >
            <div
              class="text-primary mb-4 flex justify-center group-hover:text-accent transition-colors"
              v-html="feature.icon"
            ></div>
            <h3 class="text-primary font-bold text-lg mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
