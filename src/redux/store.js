import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});
console.info("onCreate Store: ", store.getState());

store.subscribe(() => {
  console.info("Store Change: ", store.getState());
});

export default store;
