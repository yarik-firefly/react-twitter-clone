import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import tweetsSlice from "./slices/tweetsSlice";

export const store = configureStore({
  reducer: {
    modalSlice,
    tweetsSlice,
  },
});
