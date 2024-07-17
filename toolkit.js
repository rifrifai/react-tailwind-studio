import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// const intialState = {
//   cart: [],
// };
// [] => initialState

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
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

const action1 = addToCart({ id: 1, qty: 100 });
store.dispatch(action1);
