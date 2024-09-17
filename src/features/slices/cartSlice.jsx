import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      const exist = state.cart.find((product) => product.id === productId.id);
      if (exist) {
        exist.amount++;
        exist.totalPrice += productId.price;
        state.totalAmount++;
        state.totalPrice += productId.price;
      } else {
        state.cart.push({
          id: productId.id,
          price: productId.price,
          amount: 1,
          totalPrice: productId.price,
          name: productId.name,
          img: productId.img,
          text: productId.text,
        });
        state.totalAmount++;
        state.totalPrice += productId.price;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const exist = state.cart.find((product) => product.id === productId.id);
      if (exist.amount === 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== productId.id
        );
        state.totalAmount--;
        state.totalPrice -= productId.price;
      } else {
        exist.amount--;
        exist.totalPrice -= productId.price;
        state.totalAmount--;
        state.totalPrice -= productId.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
