export const fixUrl = (baseUrl: string, nextUrl: string) => {
  const languages = ["zh"];
  let currentLanguage = "";
  languages.forEach((language) => {
    if (baseUrl.includes(`/${language}/`)) currentLanguage = `/${language}/`;
  });
  return (currentLanguage + nextUrl).replace(/([^:]\/)\/+/g, "$1");
};
