import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      '@routes': `${path.resolve(__dirname, "./src/routes/")}`,
      '@services': `${path.resolve(__dirname, "./src/services/")}`,
      '@components': `${path.resolve(__dirname, "./src/components/")}`,
      '@common': `${path.resolve(__dirname, "./src/common/")}`,
      '@styles': `${path.resolve(__dirname, "./src/styles/")}`,

    },
  },
  server : {
    port: 8080
  }
});
