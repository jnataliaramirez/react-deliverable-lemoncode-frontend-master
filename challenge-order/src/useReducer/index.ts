import { Action, OrderState } from "../types";
import { getState, getTotalAmount } from "../utils/getCurrentDay";

export const orderInfoReducer = (state, action) => {
  switch (action.type) {
    case "sendOrder":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "stateProducts":
      const { type, id, name, value, checked } = action.payload;
      const updateProducts = state.products.map((item) => {
        if (item.id === parseInt(type === "number" ? id : name, 10)) {
          return {
            ...item,
            [type === "number" ? "amount" : "state"]:
              type === "checkbox" ? checked : value,
          };
        }
        return item;
      });
      return {
        ...state,
        totalAmount: getTotalAmount(updateProducts),
        state: getState(updateProducts),
        products: updateProducts,
      };
    case "validAllCheckboxes":
      const productsValid = state.products.map((product) => ({
        ...product,
        state: true,
      }));
      return {
        ...state,
        state: 100,
        products: productsValid,
      };
    case "unselectAllCheckboxes":
      const productsUnselect = state.products.map((product) => ({
        ...product,
        state: false,
      }));
      return {
        ...state,
        state: 0,
        products: productsUnselect,
      };
    case "clearInfo":
      return {
        number: "2",
        provider: "",
        date: "1815-12-10",
        totalAmount: 0,
        state: 0,
        products: [
          {
            id: 2,
            state: false,
            description: "...",
            amount: 0,
          },
        ],
      };

    default:
      return state;
  }
};
