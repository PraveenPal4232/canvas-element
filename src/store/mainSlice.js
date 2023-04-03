import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 10,
  color: "#333333",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateNumber: (state, action) => {
      state.number = action.payload;
    },
    updateColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNumber, updateColor } = mainSlice.actions;
export const mainState = (state) => state.main;
export default mainSlice.reducer;
