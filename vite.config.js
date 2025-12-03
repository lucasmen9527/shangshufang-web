/*
 * @Descripttion:
 * @Author: Lucas.men
 * @version: v1.0
 * @Date: 2025-11-30 13:45:32
 * @LastEditors: Lucas.men
 * @LastEditTime: 2025-11-30 13:47:07
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0", // 允许外部访问
    port: 5173, // 端口
    strictPort: true, // 端口被占用时直接报错，不自动切换
    allowedHosts: true, // 允许所有域名访问（内网穿透必需）
  },
});
