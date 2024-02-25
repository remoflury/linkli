export const createRandomString = (length: number): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const getIdFromSlug = (slug: string) => {
  const match = slug.match(/^(\d+)([a-zA-Z]+)$/);
  if (match) {
    return { numbers: match[1], letters: match[2] };
  } else {
    return { numbers: null, letters: null };
  }
}

export const createRedirectUrl = (url: string): string => {
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www.")) return url

  return `https://${url}`
}