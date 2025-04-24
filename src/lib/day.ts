export const getDaysInYear = (year: number) => {
  return new Date(year, 12, 0).getDate();
};

// get data for now
export const getCurrentDay = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  const daysInYear = now.getFullYear() % 4 === 0 ? 366 : 365;
  const yearProgress = (day / daysInYear) * 100;
  return {
    now,
    day,
    yearProgress,
    daysInYear,
  };
};
