import { fileURLToPath, URL } from 'node:url'
import build from '@hono/vite-build/cloudflare-workers'
import honox from 'honox/vite'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    assetsDir: "static"
  },
  plugins: [
    vue(),
    honox({
      devServer: { adapter },
      client: {
        input: ['./app/style.css']
      }
    }),
    build()
  ]
})