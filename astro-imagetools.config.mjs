import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: "webp",
  layout: "fill",
  fallbackFormat: "webp",
  includeSourceFormat: false,
  breakpoints: [320, 768, 1024],
});
