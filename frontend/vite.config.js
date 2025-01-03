import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"https://chatting-mern-repo-2-88rsiua5q-ik-khans-projects.vercel.app"
    }
  },
  plugins: [react()],
})
