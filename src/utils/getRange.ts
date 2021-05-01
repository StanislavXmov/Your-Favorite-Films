export const getRange = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};
