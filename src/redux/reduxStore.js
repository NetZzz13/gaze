import { createStore, combineReducers, applyMiddleware } from "redux";
import itemsReducer from "./items-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  itemsPage: itemsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
