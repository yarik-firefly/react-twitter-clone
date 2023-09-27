import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import tweetsSlice from "./slices/tweetsSlice";
import authSlice from "./slices/authSlice";
import CommentsSlice from "./slices/CommentsSlice";
export const store = configureStore({
  reducer: {
    modalSlice,
    tweetsSlice,
    authSlice,
    CommentsSlice,
  },
});
