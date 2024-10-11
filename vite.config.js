import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
  const env = (loadEnv(mode, process.cwd(), ''))
    return{
      define:{
        'process.env.VUE_APP_API': JSON.stringify(env.VUE_APP_API),
      },
      base:'/knit-web/',
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
})
