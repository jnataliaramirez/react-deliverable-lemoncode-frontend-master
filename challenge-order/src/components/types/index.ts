export interface Product {
  id: number | string,
  state: boolean,
  description: string,
  amount: string,
}


export interface OrderState {
  id: string, 
  provider: string,
  date: string, 
  totalAmount: number,
  state: number,
  products: Product[],
}

