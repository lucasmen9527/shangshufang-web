<script setup>
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: '关于我们', href: '/#about' },
  { name: '服务范围', href: '/#services' },
  { name: '联系我们', href: '/#contact' }
]

const services = [
  '党建文化设计制作',
  '画册设计印刷',
  '史志年鉴编纂',
  '个人出书服务',
  '高企申报服务'
]
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="container-custom section-padding pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="../assets/images/logo-white.png" alt="尚书房" class="h-10" />
            <span class="text-xl font-bold">尚书房印务</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            济南尚书房印务有限公司，专业的编纂出版印务服务机构，省市政府定点采购单位。
          </p>
          <p class="text-accent mt-4 font-medium">
            选择尚书房，服务一站式
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-accent transition-colors text-sm"
              >
                {{ link.name }}
              </a>
            </li>
            <li>
              <a
                href="http://book.kidoit.cn/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 hover:text-accent transition-colors text-sm"
              >
                电子书平台
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-bold mb-4">服务项目</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <span class="text-gray-300 text-sm">{{ service }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-bold mb-4">联系方式</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>济南市历下区大东科技城A座609室</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:13006599924" class="hover:text-accent transition-colors">130-0659-9924</a>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>陈经理</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-600 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} 济南尚书房印务有限公司 版权所有
          </p>
          <p class="text-gray-400 text-sm">
            省政府定点采购单位 | 济南市政府定点采购单位
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
