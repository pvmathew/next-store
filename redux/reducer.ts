import { Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { InventoryActionTypes, InventoryState } from "./types";

export const initialState: InventoryState = {
  data: [],
  errors: null,
  loading: false,
};

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  console.log(action.type);
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

export { reducer as InventoryReducer };
