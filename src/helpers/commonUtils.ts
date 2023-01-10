export const fixUrl = (baseUrl: string, nextUrl: string) => {
  return (baseUrl + nextUrl).replace(/([^:]\/)\/+/g, "$1");
};
