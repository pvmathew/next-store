import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { CurrencyReducer, InventoryReducer, ListingReducer } from "./reducer";
import { ApplicationState as State } from "./types";

// consolodate all reducers into one
const rootReducer = combineReducers({
  inventory: InventoryReducer,
  listing: ListingReducer,
  currency: CurrencyReducer,
});

// create a makeStore function for every request
const makeStore: MakeStore<State> = (context: Context) =>
  createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<State, AnyAction>)
    )
  );

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
export default wrapper;
