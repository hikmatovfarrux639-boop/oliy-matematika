import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://oliy-matematika.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    host: true,
    port: 4321
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  vite: {
    optimizeDeps: {
      include: ['function-plot', 'katex', 'mathjs']
    },
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/mathjs')) {
              return 'vendor-mathjs';
            }
            if (id.includes('node_modules/katex')) {
              return 'vendor-katex';
            }
            if (id.includes('node_modules/function-plot')) {
              return 'vendor-plot';
            }
            if (id.includes('node_modules/three')) {
              return 'vendor-three';
            }
          }
        }
      }
    }
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: 'html' }]],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'html' }]],
  },
});
