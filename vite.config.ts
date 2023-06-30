import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      pages: path.resolve(__dirname, 'src/pages'),
      infrastructure: path.resolve(__dirname, 'src/infrastructure'),
    },
  },
});
