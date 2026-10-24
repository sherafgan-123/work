import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of https://sherafgan-123.github.io. Set SITE_BASE for a project-page path or custom domain.
export default defineConfig({
  base: process.env.SITE_BASE ?? "/",
  plugins: [react()],
});
