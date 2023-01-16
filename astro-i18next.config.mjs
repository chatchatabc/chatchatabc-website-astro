/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "zh"],
  routes: {
    zh: {
      blogs: {
        index: "博客",
        "[blog]": "[blog]",
      },
    },
  },
};
