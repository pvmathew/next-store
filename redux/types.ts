export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
export enum InventoryActionTypes {
  FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
  FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
  FETCH_ERROR = "@@inventory/FETCH_ERROR",
}
export interface InventoryState {
  loading: boolean;
  data: Product[];
  errors?: string;
}

export interface ApplicationState {
  inventory: InventoryState;
}
