import { Action, OrderState } from "../types";

export const orderInfoReducer = (state, action) => {
  switch (action.type) {
    case "sendOrder":
      return {
        ...state,
        id: action.payload.id,
        number: action.payload.number,
        provider: action.payload.provider,
        date: action.payload.date,
        totalAmount: action.payload.totalAmount,
        state: action.payload.state,
      };
    default:
      return state;
  }
};
