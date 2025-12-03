<script setup>
// 联系我们模块
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  company: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: 后端接口对接
  alert('感谢您的留言，我们会尽快与您联系！')
  form.value = { name: '', phone: '', company: '', message: '' }
}
</script>

<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-custom">
      <!-- 标题 -->
      <h2 class="section-title">联系我们</h2>
      <p class="section-subtitle">
        欢迎垂询，我们将竭诚为您服务
      </p>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- 左侧联系信息 -->
        <div>
          <div class="bg-background rounded-2xl p-8">
            <h3 class="text-xl font-bold text-primary mb-6">济南尚书房印务有限公司</h3>

            <div class="space-y-6">
              <!-- 地址 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-800">公司地址</p>
                  <p class="text-gray-500">济南市历下区大东科技城A座609室</p>
                </div>
              </div>

              <!-- 电话 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-800">联系电话</p>
                  <p class="text-gray-500">130-0659-9924（陈经理）</p>
                </div>
              </div>

              <!-- 服务时间 -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-800">服务时间</p>
                  <p class="text-gray-500">周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <!-- 合作宗旨 -->
            <div class="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-accent">
              <p class="text-primary font-medium text-lg">
                选择尚书房，服务一站式
              </p>
            </div>
          </div>
        </div>

        <!-- 右侧表单 -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-medium mb-2">您的姓名</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2">联系电话</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="请输入电话"
                />
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">公司/单位名称</label>
              <input
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="请输入公司或单位名称（选填）"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">咨询内容</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="请描述您的需求或问题"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full btn-primary"
            >
              提交留言
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
