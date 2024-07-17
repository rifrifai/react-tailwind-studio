import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// const intialState = {
//   cart: [],
// };
// [] => initialState

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    // ada 2 cara makainya
    state.push(action.payload);
    // state.push = [...state.cart, action.payload];
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  console.info("STORE CHANGE : ", store.getState());
});

const action1 = addToCart({ id: 1, qty: 100 });
store.dispatch(action1);
// store.dispatch(addToCart({ id: 1, qty: 10 }));
