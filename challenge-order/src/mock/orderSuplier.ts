import { getCurrentDay } from "../utils/getCurrentDay";

const currentDay = getCurrentDay();

export const initialValues = {
  id: "",
  number: "",
  provider: "",
  date: currentDay,
  totalAmount: 1400,
  state: 1,
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