import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { InventoryReducer } from "./reducer";
import { ApplicationState as State } from "./types";

// consolodate all reducers into one
const rootReducer = combineReducers({ inventory: InventoryReducer });

// create a makeStore function for every request
const makeStore: MakeStore<State> = (context: Context) =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
export default wrapper;
