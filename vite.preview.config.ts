import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Single-file preview build (hash routing) — `npx vite build -c vite.preview.config.ts`
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  define: { 'import.meta.env.VITE_HASH_ROUTER': '"1"' },
  build: { outDir: 'preview-dist' },
})
