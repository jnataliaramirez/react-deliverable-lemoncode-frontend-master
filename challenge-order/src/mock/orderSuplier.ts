import { OrderInformation } from '../types';
import { getCurrentDay } from '../utils/getCurrentDay';

const currentDay = getCurrentDay();

export const initialValues: OrderInformation = {
  number: '1',
  provider: '',
  date: currentDay,
  totalAmount: 4700,
  state: 33,
  products: [
    {
      id: '1',
      state: true,
      description: 'Frontend Master',
      amount: '2000',
    },
    {
      id: '2',
      state: false,
      description: 'Backend Bootcamp',
      amount: '1500',
    },
    {
      id: '3',
      state: false,
      description: 'JavaScript Bootcamp',
      amount: '1200',
    },
  ],
};
