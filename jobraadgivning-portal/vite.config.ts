import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Fjern createHtmlPlugin og dens konfiguration
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});