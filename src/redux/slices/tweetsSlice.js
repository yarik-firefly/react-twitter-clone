import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTweets = createAsyncThunk("tweets/getTweets", async () => {
  const { data } = await axios.get(`http://localhost:3001/tweets`);
  return await data;
});

export const getNewsList = createAsyncThunk("news/getNewsList", async () => {
  const { data } = await axios.get(`http://localhost:3001/news`);
  return await data;
});

export const getOneTwitt = createAsyncThunk(
  "tweets/getOneTwitt",
  async (id) => {
    const { data } = await axios.get(`http://localhost:3001/tweets?_id=${id}`);
    return await data;
  }
);

export const postTwitt = createAsyncThunk("tweets/postTwitt", async (twitt) => {
  return await axios.post(`http://localhost:3001/tweets`, {
    date: {
      day: new Date().getDate(),
      mounth: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
    id: Math.random() * 1000,
    text: twitt,
    _id: 0,
    avatarUrl: "",
    fullname: "",
    username: "",
  });
});

const initialState = {
  tweets: [] || null,
  news: [] || null,
  oneTweet: [] || null,
  statusTweets: "LOADING",
  statusNews: "LOADING",
  statusOneTweet: "LOADING",
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: {
    [getTweets.pending]: (state) => {
      state.statusTweets = "LOADING";
    },
    [getTweets.fulfilled]: (state, action) => {
      state.tweets = action.payload;
      state.statusTweets = "SUCCESS";
    },
    [getTweets.rejected]: (state) => {
      state.statusTweets = "ERROR";
    },
    //=================================================
    [getNewsList.pending]: (state) => {
      state.status = "LOADING";
    },
    [getNewsList.fulfilled]: (state, action) => {
      state.news = action.payload;
      state.status = "SUCCESS";
    },
    [getNewsList.rejected]: (state) => {
      state.status = "ERROR";
    },
    //=================================================
    [getOneTwitt.pending]: (state) => {
      state.statusOneTweet = "LOADING";
    },
    [getOneTwitt.fulfilled]: (state, action) => {
      state.oneTweet = action.payload;
      state.statusOneTweet = "SUCCESS";
    },
    [getOneTwitt.rejected]: (state) => {
      state.statusOneTweet = "ERROR";
    },
    //=================================================
    [postTwitt.pending]: (state) => {
      state.statusTweets = "LOADING";
    },
    [postTwitt.fulfilled]: (state, action) => {
      state.tweets.push(action.payload);
      state.statusTweets = "SUCCESS";
    },
    [postTwitt.rejected]: (state) => {
      state.statusTweets = "ERROR";
    },
  },
});

export default tweetsSlice.reducer;
