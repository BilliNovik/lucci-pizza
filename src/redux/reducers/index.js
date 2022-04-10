import { combineReducers } from "redux";
import { pizzas } from "./pizzas";
import { cart } from "./cart";

export const rootReducer = combineReducers({
    pizzas,
    cart,
})