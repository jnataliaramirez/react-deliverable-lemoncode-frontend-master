import { getCurrentDay } from "../utils/getCurrentDay";

const currentDay = getCurrentDay();

export const initialValues = {
  id: "1",
  number: "",
  provider: "",
  date: currentDay,
  totalAmount: 4700,
  state: 0,
  products: [
    {
      id: 1,
      state: false,
      description: "Frontend Master",
      amount: 2000,
    },
    {
      id: 2,
      state: false,
      description: "Backend Bootcamp",
      amount: 1500,
    },
    {
      id: 3,
      state: false,
      description: "JavaScript Bootcamp",
      amount: 1200,
    },
  ],
}