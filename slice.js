// redux slice paling rekomendasi karena sangat singkat

import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.info("onCreate Store :", store.getState());

store.subscribe(() => {
  console.info("STORE CHANGE : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 3, qty: 30 }));
store.dispatch(cartSlice.actions.addToCart({ id: 4, qty: 3 }));
