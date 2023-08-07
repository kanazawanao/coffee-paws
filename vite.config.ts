import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      app: path.resolve(__dirname, 'src/app'),
      config: path.resolve(__dirname, 'src/config'),
      components: path.resolve(__dirname, 'src/components'),
      models: path.resolve(__dirname, 'src/models'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
});
