<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: "首页", href: "/#hero" },
  { name: "关于我们", href: "/#about" },
  { name: "服务范围", href: "/#services" },
  { name: "电子书", href: "/bookshelf" },
  { name: "新闻动态", href: "/news" },
  { name: "联系我们", href: "/#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3">
        <img src="../assets/images/logo.png" alt="尚书房" class="h-12" />
        <span
          :class="[
            'text-xl font-bold transition-colors',
            isScrolled ? 'text-primary' : 'text-white',
          ]"
        >
          尚书房印务
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-6">
        <template v-for="item in navItems" :key="item.name">
          <a
            v-if="item.external"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'text-sm font-medium transition-colors hover:text-accent',
              isScrolled ? 'text-gray-700' : 'text-white',
            ]"
          >
            {{ item.name }}
          </a>
          <router-link
            v-else-if="item.href.startsWith('/')"
            :to="item.href"
            :class="[
              'text-sm font-medium transition-colors hover:text-accent',
              isScrolled ? 'text-gray-700' : 'text-white',
            ]"
          >
            {{ item.name }}
          </router-link>
          <a
            v-else
            :href="item.href"
            :class="[
              'text-sm font-medium transition-colors hover:text-accent',
              isScrolled ? 'text-gray-700' : 'text-white',
            ]"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden p-2"
        :class="isScrolled ? 'text-primary' : 'text-white'"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="lg:hidden bg-white shadow-lg">
      <nav class="container-custom py-4 flex flex-col gap-4">
        <template v-for="item in navItems" :key="item.name">
          <a
            v-if="item.external"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 font-medium hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
          <router-link
            v-else-if="item.href.startsWith('/')"
            :to="item.href"
            class="text-gray-700 font-medium hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
          <a
            v-else
            :href="item.href"
            class="text-gray-700 font-medium hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>
    </div>
  </header>
</template>
