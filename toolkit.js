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

const action2 = { type: "ADD_TO_CART", payload: { id: 1, qty: 1000 } };
store.dispatch(action2);
