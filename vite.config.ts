import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

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
  base: '/Homepagev2/',
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    // Bundle analyzer (run with: npm run build -- --visualizer)
    visualizer({
      filename: 'dist/bundle-stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  // BUILD OPTIMIZATIONS
  build: {
    // Enable minification (terser is more aggressive than esbuild)
    minify: 'terser',
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,      // Remove console.logs
        drop_debugger: true,     // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,               // Multiple passes for better compression
      },
      mangle: {
        toplevel: true,          // Mangle top-level variables
      },
      format: {
        comments: false,         // Remove comments
      },
    },
    
    // Target modern browsers for smaller bundles
    target: 'es2020',
    
    // Chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
          
          // Animation libraries
          'vendor-motion': ['motion', 'framer-motion'],
          
          // Icon libraries
          'vendor-icons': ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
          
          // UI libraries (Radix UI)
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
          ],
          
          // Utilities
          'vendor-utils': ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },
        
        // Optimize chunk filenames
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    
    // Disable source maps in production (smaller build)
    sourcemap: false,
    
    // Increase chunk size warning limit (1MB)
    chunkSizeWarningLimit: 1000,
    
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
  },

  // Development optimizations
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },

  // Preview optimizations
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
})