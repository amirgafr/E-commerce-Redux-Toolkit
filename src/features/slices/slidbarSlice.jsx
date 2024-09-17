import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    nextSlider(state, action) {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlider(state, action) {
      state.value = action.payload;
    },
  },
});

export const { nextSlider, prevSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
