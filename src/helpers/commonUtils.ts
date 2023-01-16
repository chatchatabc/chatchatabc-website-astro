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

export const utilRemoveSpaces = (text: string) => text.replaceAll(" ", "-");
