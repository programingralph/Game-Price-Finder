import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  build: {
  minify: 'esbuild',
  outDir: 'dist',
  sourcemap: false, // Disable sourcemaps to reduce memory
},
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})
