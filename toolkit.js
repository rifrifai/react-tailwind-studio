import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const intialState = {
  cart: [],
};

const cartReducer = createReducer(intialState, (builder) => {
  builder.addCase("ADD_TO_CART", (state, action) => {
    state.cart.push(action.payload);
  });
});
