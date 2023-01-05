import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: ["webp", "jpg"],
  layout: "fill",
  formatOptions: {
    webp: {
      quality: 50,
    },
  },
});
