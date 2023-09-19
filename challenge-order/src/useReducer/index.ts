import { Action, OrderState } from "../types";

export const orderInfoReducer = (state, action) => {
  switch (action.type) {
    case "sendOrder":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
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
    case "clearInfo": {
      return {
        ...state,
        number: "2",
        provider: "",
        date: "1815-12-10",
        totalAmount: 0,
        state: 0,
        products: [],
      };
    }
    default:
      return state;
  }
};
