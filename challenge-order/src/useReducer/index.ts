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
      };
    case "stateProducts":
      return {
        ...state,
        products: action.payload,
      };
    case "totalAmount": {
      return {
        ...state,
        totalAmount: action.payload,
      };
    }
    case "state": {
      return {
        ...state,
        state: action.payload,
      };
    }
    default:
      return state;
  }
};
