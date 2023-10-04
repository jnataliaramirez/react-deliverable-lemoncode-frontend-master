import { Product } from '../types';

export const getCurrentDay = (): string => {
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
};

export const getTotalAmount = (products: Product[]): number => {
  const totalAmount = products.reduce((acc, product) => {
    const amountAsNumber = parseFloat(product.amount);

    return isNaN(amountAsNumber) ? acc : acc + amountAsNumber;
  }, 0);

  return totalAmount;
};

export const getState = (products: Product[]): number => {
  const totalProducts = products.length;

  const checkedValid = products.filter(
    (product) => product.state === true,
  ).length;

  if (totalProducts === 0) {
    return 0;
  }

  return Math.round((checkedValid / totalProducts) * 100);
};
