export const apiImageUrl = (url: string | null) => {
  if (url === null) {
    return null;
  }
  const apiUrl = "https://image.tmdb.org/t/p/w500";
  return `${apiUrl}${url}`;
};
