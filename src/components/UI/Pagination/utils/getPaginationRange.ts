export const getPaginationRange = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};
