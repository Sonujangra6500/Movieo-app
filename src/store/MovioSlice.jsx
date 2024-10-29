import { createSlice } from "@reduxjs/toolkit";

export const movioSlice = createSlice({
  name: "movieo",
  initialState: {
    bannerData: {},
    allmovieData: {},
    relatedData: {},
  },
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload; // Merging payload into bannerData
    },
    setAllmovieData: (state, action) => {
      state.allmovieData = action.payload;
    },
    setRelatedData: (state, action) => {
      state.relatedData = action.payload;
    },
  },
});

export const { setBannerData, setAllmovieData, setRelatedData } =
  movioSlice.actions;
export default movioSlice.reducer;
