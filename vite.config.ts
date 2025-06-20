// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths"; // ✅ Add this

export default defineConfig({
  base: "/my-recipe-book/", // ✅ GitHub Pages compatible
  plugins: [
    react(),
    tsconfigPaths(), // ✅ Enables @/ alias from tsconfig.json
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Optional if tsconfigPaths is used, but okay to keep
    },
  },
});
