import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   assetsDir: '../src/assets/**',
  // },

  plugins: [react()],
});
