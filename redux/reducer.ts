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
    rates: { init: false, eur: 0, jpy: 0, gbp: 0 },
    selected: CurrencyTypes.USD,
  },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      const payload = removeInitialValues(action.payload);
      const rates = payload.currency.rates; // latest rates grabbed in server-side store

      return {
        ...state,
        rates: {
          ...rates,
        },
      };

    case CurrencyActionTypes.FETCH_REQUEST: {
      return { ...state, rates: { ...state.rates, init: true } };
    }
    case CurrencyActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        rates: {
          ...state.rates,
          eur: action.payload.rates["EUR"],
          jpy: action.payload.rates["JPY"],
          gbp: action.payload.rates["GBP"],
        },
      };
    }
    case CurrencyActionTypes.FETCH_ERROR: {
      // return { ...state, rates: { ...state.rates, error: action.payload } };
    }

    //client only
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
  if (
    payload.currency &&
    payload.currency.rates &&
    payload.currency.rates.init === false
  ) {
    delete payload.currency.rates;
  }
  return payload;
};
