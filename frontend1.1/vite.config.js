import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/dashboard"),
      "@/components": path.resolve(__dirname, "./src/dashboard/components"),
      "@/contexts": path.resolve(__dirname, "./src/dashboard/contexts"),
      "@/lib": path.resolve(__dirname, "./src/dashboard/lib"),
    },
  },
});
