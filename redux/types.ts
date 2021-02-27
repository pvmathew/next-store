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

export enum ListingActionTypes {
  FETCH_REQUEST = "@@listing/FETCH_REQUEST",
  FETCH_SUCCESS = "@@listing/FETCH_SUCCESS",
  FETCH_ERROR = "@@listing/FETCH_ERROR",
}
export interface InventoryState {
  init: boolean;
  data: Product[];
  errors?: any;
}
export interface ListingState {
  init: boolean;
  data: Product;
  errors?: any;
}

export interface ApplicationState {
  inventory: InventoryState; // hydrated in by server's version of redux store @ initial page load
  listing: ListingState;
}
