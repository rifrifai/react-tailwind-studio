import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// const intialState = {
//   cart: [],
// };
// [] => initialState

const cartReducer = createReducer([], (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    // ada 2 cara makainya
    // state.cart.push(action.payload);
    state.cart = [...state.cart, action.payload];
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
