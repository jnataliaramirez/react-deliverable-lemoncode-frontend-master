import { Product, OrderState } from "../components/types";

interface Action {
  type: string;
  payload: unknown;
}

const orderInfoReducer = (state: OrderState, action: Action) => {
  switch (action.type) {
    case "CHANGE_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "CHANGE_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "CHANGE_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: action.payload,
      };
    case "CHANGE_STATE":
      return {
        ...state,
        id: action.payload,
      };  
      case "CHANGE_PRODUCTS":
        return {
          ...state, 
          products: action.payload,
        };
    default:
      return state;
  }
};
