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