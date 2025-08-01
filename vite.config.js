import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Config Vite sans vue-devtools
export default defineConfig({
  plugins: [vue()]
})
