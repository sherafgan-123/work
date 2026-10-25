import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of the custom domain https://shairafgan.online. Set SITE_BASE for a project-page path.
export default defineConfig({
  base: process.env.SITE_BASE ?? "/",
  plugins: [react()],
});
