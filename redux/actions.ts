import {
  ApplicationState,
  InventoryActionTypes,
  ListingActionTypes,
  CurrencyActionTypes,
} from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getProductList, getProductInfo, getExchangeRate } from "../api";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchListing: AppThunk = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ListingActionTypes.FETCH_REQUEST });
      let data = await getProductInfo(id);
      if (data) {
        return dispatch({
          type: ListingActionTypes.FETCH_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      return dispatch({
        type: ListingActionTypes.FETCH_ERROR,
        payload: e,
      });
    }
  };
};

export const fetchInventory: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: InventoryActionTypes.FETCH_REQUEST });
      let data = await getProductList();
      if (data) {
        return dispatch({
          type: InventoryActionTypes.FETCH_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR,
        payload: e,
      });
    }
  };
};

export const fetchExchangeRate: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CurrencyActionTypes.FETCH_REQUEST });
      let data = await getExchangeRate();
      if (data) {
        return dispatch({
          type: CurrencyActionTypes.FETCH_SUCCESS,
          payload: data,
        });
      }
    } catch (e) {
      return dispatch({
        type: CurrencyActionTypes.FETCH_ERROR,
        payload: e,
      });
    }
  };
};
