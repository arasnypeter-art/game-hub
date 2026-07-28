import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './public/index.html', // Replace './public/index.html' with the actual path to your index.html file
    },
  },
});
