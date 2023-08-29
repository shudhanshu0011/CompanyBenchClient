import { defineConfig } from "vite";
import svgr from 'vite-plugin-svgr';
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'nested/index.html'),
      },
    },
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      '@routes': `${path.resolve(__dirname, "./src/routes/")}`,
      '@services': `${path.resolve(__dirname, "./src/services/")}`,
      '@components': `${path.resolve(__dirname, "./src/components/")}`,
      '@common': `${path.resolve(__dirname, "./src/common/")}`,
      '@styles': `${path.resolve(__dirname, "./src/styles/")}`,
      '@types': `${path.resolve(__dirname, "./src/types/")}`,
      '@config': `${path.resolve(__dirname, "./src/config/")}`,
      '@hooks': `${path.resolve(__dirname, "./src/hooks/")}`,
    },
  },
  server: {
    port: 8080
  }
});
