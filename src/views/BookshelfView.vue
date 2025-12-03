<script setup>
import { ref, computed } from "vue";

const books = [
  {
    name: "中国共产党泰安市历次代表大会重要文献选编",
    path: "中国共产党泰安市历次代表大会重要文献选编",
    category: "统计年鉴",
  },
  { name: "济南统计年鉴", path: "jinan", category: "统计年鉴" },
];

const searchQuery = ref("");
const baseUrl = "https://book.shangshufang.net/eBook/";

const filteredBooks = computed(() => {
  if (!searchQuery.value.trim()) return books;
  const query = searchQuery.value.toLowerCase();
  return books.filter(
    (book) =>
      book.name.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );
});

function openBook(book) {
  window.open(`${baseUrl}${book.path}/index.html`, "_blank");
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- 顶部横幅 -->
    <div class="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
      <div class="container-custom text-center text-white">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">电子书架</h1>
        <p class="text-white/80 text-lg">浏览尚书房精心编纂的各类出版物</p>
      </div>
    </div>

    <!-- 搜索栏 -->
    <div class="container-custom -mt-8">
      <div class="bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-2xl mx-auto">
        <div class="relative">
          <svg
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索书名或分类..."
            class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg"
          />
        </div>
      </div>
    </div>

    <!-- 书架内容 -->
    <div class="container-custom py-12 md:py-16">
      <!-- 搜索结果统计 -->
      <p class="text-gray-500 mb-8">
        共
        <span class="text-primary font-medium">{{ filteredBooks.length }}</span>
        本电子书
        <span v-if="searchQuery">，搜索"{{ searchQuery }}"</span>
      </p>

      <!-- 书籍网格 -->
      <div
        v-if="filteredBooks.length"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        <div
          v-for="book in filteredBooks"
          :key="book.path"
          @click="openBook(book)"
          class="group cursor-pointer"
        >
          <!-- 书籍卡片 -->
          <div
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1"
          >
            <!-- 书籍封面 -->
            <div
              class="aspect-[3/4] bg-gradient-to-br from-primary to-secondary p-6 flex flex-col justify-between"
            >
              <div>
                <span
                  class="inline-block px-2 py-1 bg-white/20 rounded text-white/90 text-xs"
                >
                  {{ book.category }}
                </span>
              </div>
              <div class="text-center">
                <svg
                  class="w-12 h-12 mx-auto text-white/60 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 class="text-white font-bold text-sm leading-tight">
                  {{ book.name }}
                </h3>
              </div>
            </div>
            <!-- 底部操作 -->
            <div class="p-4 flex items-center justify-between">
              <span class="text-gray-600 text-sm truncate">{{
                book.name
              }}</span>
              <svg
                class="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 无结果 -->
      <div v-else class="text-center py-16">
        <svg
          class="w-16 h-16 mx-auto text-gray-300 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-gray-500">没有找到相关书籍</p>
        <button
          @click="searchQuery = ''"
          class="mt-4 text-primary hover:underline"
        >
          清除搜索
        </button>
      </div>
    </div>
  </div>
</template>
