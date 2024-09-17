import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/slidbarSlice";
import ProductsReducer from "../features/slices/ProductsSlice";
import cartReducer from "../features/slices/cartSlice";
import authSlice from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: ProductsReducer,
    cart: cartReducer,
    user: authSlice,
  },
});
