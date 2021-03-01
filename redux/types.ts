export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export enum CurrencyTypes {
  USD = "USD",
  EUR = "EUR",
  JPY = "JPY",
  GBP = "GBP",
}

type Rates = {
  jpy: number;
  eur: number;
  gbp: number;
  init: boolean;
};

export enum LayoutTypes {
  GRID = "GRID",
  LIST = "LIST",
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

export enum CurrencyActionTypes {
  FETCH_REQUEST = "@@currency/FETCH_REQUEST",
  FETCH_SUCCESS = "@@currency/FETCH_SUCCESS",
  FETCH_ERROR = "@@currency/FETCH_ERROR",
  SELECT_CURRENCY = "@@currency/SELECT_CURRENCY",
}

export enum LayoutActionTypes {
  SET_LIST = "@@layout/SET_LIST",
  SET_GRID = "@@layout/SET_GRID",
}
export interface InventoryState {
  init: boolean;
  data: Product[];
  errors?: any;
}
export interface ListingState {
  init: boolean;
  data: Product | null;
  errors?: any;
}

export interface CurrencyState {
  rates: Rates;
  selected: CurrencyTypes;
  errors?: any;
}

export interface LayoutState {
  style: LayoutTypes;
}

export interface ApplicationState {
  inventory: InventoryState;
  listing: ListingState;
  currency: CurrencyState;
  layout: LayoutState;
}
