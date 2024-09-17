import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    filteredProducts: [],
    singleProduct: [],
  },
  reducers: {
    filteredProducts(state, action) {
      const filter = storeData.filter(
        (product) => product.type === action.payload
      );
      state.filteredProducts = filter;
    },
    singleProduct(state, action) {
      const oneProduct = storeData.filter(
        (product) => product.id === action.payload
      );
      state.singleProduct = oneProduct;
    },
  },
});

export const { filteredProducts, singleProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
