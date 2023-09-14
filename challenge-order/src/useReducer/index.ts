import { Action, OrderState } from "../types";

export const orderInfoReducer = (state, action) => {
  switch (action.type) {
    case "sendOrder":
      return action.payload;

    default:
      return state;
  }
};
