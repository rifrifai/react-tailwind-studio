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

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer(false, (builder) => {
  builder.addCase(login, (state, action) => {
    state = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.info("onCreate Store :", store.getState());

store.subscribe(() => {
  console.info("STORE CHANGE : ", store.getState());
});

// const action1 = addToCart({ id: 1, qty: 100 });
// store.dispatch(action1);
store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 2, qty: 12 }));
