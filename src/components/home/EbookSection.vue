<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToBookshelf() {
  router.push('/bookshelf')
}
</script>

<template>
  <section id="ebook" class="section-padding bg-background">
    <div class="container-custom">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div class="grid lg:grid-cols-2">
          <!-- 左侧内容 -->
          <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span class="text-accent font-medium mb-4">在线阅读</span>
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
              电子书平台
            </h2>
            <p class="text-gray-600 leading-relaxed mb-8">
              访问尚书房电子书平台，随时随地浏览我们精心编纂的各类出版物。包括史志年鉴、文化丛书、企业画册等多种类型，为您提供便捷的数字化阅读体验。
            </p>
            <div>
              <button
                @click="goToBookshelf"
                class="inline-flex items-center gap-2 btn-primary"
              >
                <span>进入电子书架</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </button>
            </div>
          </div>

          <!-- 右侧装饰 -->
          <div class="bg-gradient-to-br from-primary to-secondary p-8 md:p-12 lg:p-16 flex items-center justify-center">
            <div class="text-center text-white">
              <!-- 书本图标 -->
              <svg class="w-32 h-32 mx-auto mb-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p class="text-xl font-medium text-white/90">
                book.shangshufang.net
              </p>
              <p class="text-white/60 mt-2">
                数字化阅读新体验
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
