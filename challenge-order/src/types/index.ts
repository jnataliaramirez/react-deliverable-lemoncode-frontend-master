export interface Product {
  id: number | string;
  state: boolean;
  description: string;
  amount: string;
}

export interface OrderInformation {
  number: string;
  provider: string;
  date: string;
  totalAmount: number;
  state: number;
  products: Product[];
}

export interface SendOrderActionPayload {
  name: string;
  value: string;
}

export interface StateProductsActionPayload {
  type: "number" | "checkbox";
  id: string;
  name: string;
  value: string;
  checked: boolean;
}

export interface SendOrderAction {
  type: "sendOrder";
  payload: SendOrderActionPayload;
}

export interface StateProductsAction {
  type: "stateProducts";
  payload: StateProductsActionPayload;
}

export interface ValidAllCheckboxesAction {
  type: "validAllCheckboxes";
}

export interface UnselectAllCheckboxesAction {
  type: "unselectAllCheckboxes";
}

export interface ClearInfoAction {
  type: "clearInfo";
}

export type Action =
  | SendOrderAction
  | StateProductsAction
  | ValidAllCheckboxesAction
  | UnselectAllCheckboxesAction
  | ClearInfoAction;
