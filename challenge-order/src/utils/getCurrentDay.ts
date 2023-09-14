export const getCurrentDay = () => {
  const fecha = new Date();
  const year = fecha.getFullYear();
  let month: string | number = fecha.getMonth() + 1;
  let day: string | number = fecha.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}