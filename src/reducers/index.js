import { combineReducers } from "redux";
import products from "./procducts";
import cart from "./cart";
import messenger from "./messenger";
const appReducer = combineReducers({
  cart,
  products,
  messenger,
});
export default appReducer;
