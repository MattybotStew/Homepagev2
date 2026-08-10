import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Absolute base required for GitHub Pages project site (/Homepagev2/).
  // Relative "./" breaks iframe/asset URLs when the path has no trailing slash
  // (resolves to mattybotstew.github.io/museum-tour-map.html → GH Pages 404).
  base: '/Homepagev2/',
  
  define: {
    'process.env': {}  // ✅ FIX: prevents "process is not defined" error
  },
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
          'vendor-motion': ['motion', 'motion/react'],
          'vendor-icons': ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          'vendor-utils': ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    cssMinify: true,
  },

  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },

  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
})
