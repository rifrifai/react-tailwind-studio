import { createStore } from "redux";

// reducer
const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.info("oncreate store : ", store.getState());

// subcribe

// dispatch
