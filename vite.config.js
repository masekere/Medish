import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsConfig from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsConfig()],
})
