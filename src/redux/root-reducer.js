import { combineReducers } from "redux";
import cartReducer from "../redux/cart/cart.reducer";
import userReducer from "../redux/user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
