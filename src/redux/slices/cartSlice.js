const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
