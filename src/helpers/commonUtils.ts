import en from "@data/locales/en/translation.json";
import zh from "@data/locales/zh/translation.json";

export const utilUrlFix = (baseUrl: string, nextUrl: string) =>
  (baseUrl + nextUrl).replace(/([^:]\/)\/+/g, "$1");

export const utilUrlWithLocale = (baseUrl: string, nextUrl: string) => {
  const languages = ["zh"];
  let currentLanguage = "";
  languages.forEach((language) => {
    if (baseUrl.includes(`/${language}/`)) currentLanguage = `/${language}/`;
  });
  nextUrl.replace(currentLanguage, "/");
  return (currentLanguage + nextUrl).replace(/([^:]\/)\/+/g, "$1");
};

export const utilGetCurrentLangauge = (url: string) => {
  // Determine current lang
  const languages = ["zh"];
  let currentLanguage = "en";
  languages.forEach((language) => {
    if (url.includes(`/${language}/`)) currentLanguage = language;
  });

  return currentLanguage;
};

export const utilGetTranslations = (url: string) => {
  // Initialize translations
  interface TranslationsInterface {
    [key: string]: any;
  }
  const translations: TranslationsInterface = {
    en,
    zh,
  };

  const currentLanguage = utilGetCurrentLangauge(url);

  // returns necessary translation
  return translations[currentLanguage];
};

export const utilRemoveSpaces = (text: string) => text.replaceAll(" ", "-");
