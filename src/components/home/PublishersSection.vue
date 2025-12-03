<script setup>
// 战略合作伙伴模块

// 战略合作单位（协会/学会）
const associations = [
  '山东出版协会',
  '山东省党史史志专家',
  '山东省诗词学会'
]

// 战略合作出版社
const publishers = [
  '方志出版社',
  '中国文史出版社',
  '团结出版社',
  '线装书局',
  '新华出版社',
  '北京燕山出版社',
  '黄海数字出版社'
]
</script>

<template>
  <section id="publishers" class="section-padding bg-gradient-to-br from-primary to-secondary text-white">
    <div class="container-custom">
      <!-- 标题 -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">战略合作伙伴</h2>
      <p class="text-gray-200 text-center mb-12 max-w-2xl mx-auto">
        与多家权威出版机构及行业协会建立战略合作关系
      </p>

      <!-- 战略合作单位 -->
      <div class="mb-12">
        <h3 class="text-xl font-medium text-accent text-center mb-6">战略合作单位</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="item in associations"
            :key="item"
            class="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <!-- 战略合作出版社 -->
      <div>
        <h3 class="text-xl font-medium text-accent text-center mb-6">战略合作出版社</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div
            v-for="publisher in publishers"
            :key="publisher"
            class="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg text-center hover:bg-white/20 transition-colors"
          >
            <span class="text-sm font-medium">{{ publisher }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
