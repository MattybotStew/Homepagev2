import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  define: {
    'process.env': {}
  },
  
  build: {
    lib: {
      entry: 'src/widgets/HeroWidget/HeroWidget.tsx',
      name: 'CMAHeroWidget',
      formats: ['umd'],
      fileName: 'cma-hero-widget'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'framer-motion'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion'
        }
      }
    },
    outDir: 'dist/widget',
    emptyOutDir: true
  }
})
