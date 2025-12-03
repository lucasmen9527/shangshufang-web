<script setup>
// Hero section - 首屏大图
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary"
  >
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </div>

    <!-- 内容 -->
    <div class="relative z-10 container-custom text-center text-white px-4">
      <!-- Logo -->
      <div class="mb-8">
        <img
          src="../../assets/images/logo-white.png"
          alt="尚书房"
          class="h-32 md:h-40 mx-auto"
        />
      </div>

      <!-- 公司名称 -->
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        济南尚书房印务有限公司
      </h1>

      <!-- 副标题 -->
      <p class="text-xl md:text-2xl text-gray-200 mb-6">
        专业编纂出版印务服务机构
      </p>

      <!-- 标签 -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <span class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
          省政府定点采购单位
        </span>
        <span class="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
          济南市政府定点采购单位
        </span>
      </div>

      <!-- Slogan -->
      <div class="mb-10">
        <p class="text-2xl md:text-3xl font-medium text-accent">
          选择尚书房，服务一站式
        </p>
      </div>

      <!-- CTA 按钮 -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#services"
          class="bg-accent text-primary px-8 py-4 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
        >
          了解服务
        </a>
        <a
          href="#contact"
          class="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
        >
          联系我们
        </a>
      </div>
    </div>

    <!-- 向下滚动提示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" class="text-white/60 hover:text-white">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>
</template>
