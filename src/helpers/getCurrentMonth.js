import dayjs from "dayjs";

export const getMonth = ({ month, year }) => {
  const firstDayOfMonth = dayjs(new Date(year, month, 0)).day();
  let count = 0 - firstDayOfMonth;
  
  const currentMonth = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      count++
      return dayjs(new Date(year, month, count))
    })
  });
  
  return currentMonth;
};
