import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: "",
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
    showModalTweet(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const { setOpen, showModalTweet } = modalSlice.actions;

export default modalSlice.reducer;
