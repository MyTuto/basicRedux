import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterReducer";


const reducers = combineReducers({counter: counterReducer});

export const store = createStore(reducers)
