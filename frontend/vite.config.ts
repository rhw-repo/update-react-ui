import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const allowedHosts = process.env.RAILWAY_PUBLIC_DOMAIN
  ? [process.env.RAILWAY_PUBLIC_DOMAIN]
  : ['react-typescript-ui-demo-chingu-8b24.up.railway.app']

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build/client'
  },
  preview: {
    allowedHosts
  }
})
