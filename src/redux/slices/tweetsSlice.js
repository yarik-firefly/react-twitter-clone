import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";

export const getTweets = createAsyncThunk(
  "tweets/getTweets",
  async (id, { dispatch }) => {
    const { data } = await axios.get(
      id
        ? `${process.env.REACT_APP_API_URL}/users/tweets/${id}`
        : `${process.env.REACT_APP_API_URL}/tweets`
    );
    // dispatch(addTweet(data.data));
    console.log(data);
    return await data.data;
  }
);

export const getNewsList = createAsyncThunk("news/getNewsList", async () => {
  const { data } = await axios.get(`/news`);
  return await data;
});

export const getOneTwitt = createAsyncThunk(
  "tweets/getOneTwitt",
  async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tweet/${id}`);
    return [data.data];
  }
);

export const getAllTweetOfUser = createAsyncThunk(
  "tweets/getAllTweetOfUser",
  async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/tweets/${id}`
    );
    return data.data;
  }
);

export const deleteTweet = createAsyncThunk(
  "tweets/deleteTwitt",
  async (id, { dispatch }) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/tweet/${id}`);
    dispatch(removeTweet(id));
    return data.data._id;
  }
);

export const postTwitt = createAsyncThunk(
  "tweets/postTwitt",
  async (payload, { dispatch }) => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/tweet`, payload);
      console.log(data);
      dispatch(addTweet(data.data));
      // dispatch(getTweets());
    } catch (error) {
      console.error(error);
    }
  }
);

export const uploadImg = createAsyncThunk(
  "tweets/uploadImg",
  async (image, { dispatch }) => {
    try {
      const images = {
        image: image,
      };
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, images);
      return data;
      // dispatch(getTweets());
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  tweets: [] || null,
  news: [] || null,
  oneTweet: [] || null,
  statusTweets: "LOADING",
  statusNews: "LOADING",
  statusOneTweet: "LOADING",
  statusPostTweet: "LOADING",
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet(state, action) {
      state.tweets.unshift(action.payload);
    },
    removeTweet(state, action) {
      state.tweets = state.tweets.filter(
        (tweet) => tweet._id !== action.payload
      );
    },
  },
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
      state.statusPostTweet = "LOADING";
    },
    [postTwitt.fulfilled]: (state, action) => {
      // state.tweets = [action.payload, ...state.tweets];
      state.statusPostTweet = "SUCCESS";
    },
    [postTwitt.rejected]: (state) => {
      state.statusPostTweet = "ERROR";
    },
    //===================================================
    [getAllTweetOfUser.pending]: (state) => {},
    [getAllTweetOfUser.fulfilled]: (state, action) => {
      state.tweets = action.payload;
    },
    [getAllTweetOfUser.rejected]: (state) => {},
  },
});

export const { addTweet, removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
