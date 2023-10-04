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

export interface SendOrderPayload {
  name: string;
  value: string;
}

export interface StateProductsPayload {
  type: "number" | "checkbox";
  id: string;
  name: string;
  value: string;
  checked: boolean;
}

export interface SendOrderAction {
  type: "sendOrder";
  payload: SendOrderPayload;
}

export interface StateProductsPayloadAction {
  type: "StateProductsPayload";
  payload: StateProductsPayload;
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
  | StateProductsPayloadAction
  | ValidAllCheckboxesAction
  | UnselectAllCheckboxesAction
  | ClearInfoAction;
