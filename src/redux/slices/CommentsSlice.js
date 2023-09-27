import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";

export const createComment = createAsyncThunk(
  "comment/createComment",
  async (info, { dispatch }) => {
    const { data } = await axios.post(
      `${
        process.env.REACT_APP_API_URL || "http://localhost:8888/"
      }users/tweets/${info.id}`,
      { text: info.text }
    );
    console.log(data);
    dispatch(addComment(data.data));
    return await data.data;
  }
);

export const getCommentUnderTweet = createAsyncThunk(
  "comment/getCommentUnderTweet",
  async (id, { dispatch }) => {
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_API_URL ||
        `http://localhost:8888/users/comments/${id}`
      }`
    );
    return await data.data;
  }
);

const initialState = {
  comments: [] || null,
  status: "LOADING",
  statusAdd: "LOADING",
};

const commentsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addComment(state, action) {
      state.comments.unshift(action.payload);
    },
  },
  extraReducers: {
    [createComment.pending]: (state) => {
      state.statusAdd = "LOADING";
    },
    [createComment.fulfilled]: (state, action) => {
      state.statusAdd = "SUCCESS";
    },
    [createComment.rejected]: (state) => {
      state.statusAdd = "ERROR";
    },
    //====================================================
    [getCommentUnderTweet.pending]: (state) => {
      state.status = "LOADING";
    },
    [getCommentUnderTweet.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.status = "SUCCESS";
    },
    [getCommentUnderTweet.rejected]: (state) => {
      state.status = "ERROR";
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
