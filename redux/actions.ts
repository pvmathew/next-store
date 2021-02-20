import { ApplicationState, InventoryActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchProducts } from "../api";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: InventoryActionTypes.FETCH_REQUEST });
      let data = await fetchProducts();
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
