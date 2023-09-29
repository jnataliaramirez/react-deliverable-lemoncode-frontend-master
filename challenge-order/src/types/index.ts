export interface Product {
  id: number | string;
  state: boolean;
  description: string;
  amount: string;
}

export interface OrderInformationInterface {
  number: string;
  provider: string;
  date: string;
  totalAmount: number;
  state: number;
  products: Product[];
}

export interface SendOrderAction {
  type: "sendOrder";
  payload: {
    name: string;
    value: string;
  };
}

export interface StateProductsAction {
  type: "stateProducts";
  payload: {
    type: "number" | "text" | "checkbox";
    id: number | string;
    name: string;
    value: string;
    checked: boolean;
  };
}

export interface ValidAllCheckboxesAction {
  type: "validAllCheckboxes";
  payload: null;
}

export interface UnselectAllCheckboxesAction {
  type: "unselectAllCheckboxes";
  payload: null;
}

export interface ClearInfoAction {
  type: "clearInfo";
  payload: null;
}

export type Action =
  | SendOrderAction
  | StateProductsAction
  | ValidAllCheckboxesAction
  | UnselectAllCheckboxesAction
  | ClearInfoAction;
