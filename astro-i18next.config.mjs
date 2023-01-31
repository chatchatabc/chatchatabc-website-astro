/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "zh"],
  routes: {
    zh: {
      blogs: {
        "[blog]": "[blog]",
      },
    },
  },
  i18nextServer: {
    backend: {
      loadPath: "./data/locales/{{lng}}/{{ns}}.json",
    },
  },
};
