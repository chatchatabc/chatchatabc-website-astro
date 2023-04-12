import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import svelte from "@astrojs/svelte";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://chatchatabc.com",
  integrations: [
    astroI18next(),
    tailwind(),
    mdx(),
    astroImageTools,
    svelte(),
    sitemap(),
    robotsTxt(),
  ],
});
