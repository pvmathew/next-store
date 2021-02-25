import { Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {
  InventoryActionTypes,
  ListingActionTypes,
  InventoryState,
  ListingState,
} from "./types";


export const InventoryReducer: Reducer<InventoryState> = (
  state = { data: [], errors: null, loading: false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.inventory };
    case InventoryActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case InventoryActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const ListingReducer: Reducer<ListingState> = (
  state = { data: null, errors: null, loading: false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.listing };
    case ListingActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case ListingActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case ListingActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
