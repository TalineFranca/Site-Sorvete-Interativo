import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works when served from a GitLab Pages
// project subpath (https://<user>.gitlab.io/<repo>/) as well as a
// user/group root page.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
})
