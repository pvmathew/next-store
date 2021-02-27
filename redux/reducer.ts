import { Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {
  InventoryActionTypes,
  ListingActionTypes,
  InventoryState,
  ListingState,
} from "./types";

export const InventoryReducer: Reducer<InventoryState> = (
  state = { data: [], errors: null, init: false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      // drop initial values from first HYDRATE
      if (action.payload.inventory && action.payload.inventory.init === false) {
        delete action.payload.inventory;
      }
      if (action.payload.listing && action.payload.listing.init === false) {
        delete action.payload.listing;
      }
      return { ...state, ...action.payload.inventory };
    case InventoryActionTypes.FETCH_REQUEST: {
      return { ...state, init: true };
    }
    case InventoryActionTypes.FETCH_SUCCESS: {
      return { ...state, data: action.payload };
    }
    case InventoryActionTypes.FETCH_ERROR: {
      return { ...state, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export const ListingReducer: Reducer<ListingState> = (
  state = { data: null, errors: null, init: false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.inventory && action.payload.inventory.init === false) {
        delete action.payload.inventory;
      }
      if (action.payload.listing && action.payload.listing.init === false) {
        delete action.payload.listing;
      }
      return { ...state, ...action.payload.listing };
    case ListingActionTypes.FETCH_REQUEST: {
      return { ...state, init: true };
    }
    case ListingActionTypes.FETCH_SUCCESS: {
      return { ...state, data: action.payload };
    }
    case ListingActionTypes.FETCH_ERROR: {
      return { ...state, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
