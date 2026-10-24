import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project at /work/. Override with SITE_BASE for a custom domain ("/").
export default defineConfig({
  base: process.env.SITE_BASE ?? "/work/",
  plugins: [react()],
});
