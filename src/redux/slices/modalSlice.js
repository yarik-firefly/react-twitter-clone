import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = modalSlice.actions;

export default modalSlice.reducer;
