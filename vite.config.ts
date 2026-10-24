import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project at /my-portfolio/. Override with SITE_BASE for a custom domain ("/").
export default defineConfig({
  base: process.env.SITE_BASE ?? "/my-portfolio/",
  plugins: [react()],
});
