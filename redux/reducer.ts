import { Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {
  InventoryActionTypes,
  ListingActionTypes,
  CurrencyActionTypes,
  InventoryState,
  ListingState,
  CurrencyState,
  CurrencyTypes,
} from "./types";

export const InventoryReducer: Reducer<InventoryState> = (
  state = { data: [], errors: null, init: false },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      const payload = removeInitialValues(action.payload);
      return { ...state, ...payload.inventory };
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
      const payload = removeInitialValues(action.payload);
      return { ...state, ...payload.listing };
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

export const CurrencyReducer: Reducer<CurrencyState> = (
  state = {
    eur_rate: 0,
    jpy_rate: 0,
    gbp_rate: 0,
    selected: CurrencyTypes.USD,
    init: false,
  },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      const payload = removeInitialValues(action.payload);
      return { ...state, ...payload.currency };
    case CurrencyActionTypes.FETCH_REQUEST: {
      return { ...state, init: true };
    }
    case CurrencyActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        eur_rate: action.payload.rates["EUR"],
        jpy_rate: action.payload.rates["JPY"],
        gbp_rate: action.payload.rates["GBP"],
        init: true,
      };
    }
    case CurrencyActionTypes.FETCH_ERROR: {
      return { ...state, errors: action.payload };
    }
    case CurrencyActionTypes.SELECT_CURRENCY: {
      return { ...state, selected: action.payload };
    }
    default: {
      return state;
    }
  }
};

// drops initial values from action.payload -- required to ensure proper merging during hydration
const removeInitialValues = (payload) => {
  if (payload.inventory && payload.inventory.init === false) {
    delete payload.inventory;
  }
  if (payload.listing && payload.listing.init === false) {
    delete payload.listing;
  }
  if (payload.currency && payload.currency.init === false) {
    delete payload.currency;
  }
  return payload;
};
