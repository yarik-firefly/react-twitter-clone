import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";

export const login = createAsyncThunk(
  "auth/login",
  async (info, { dispatch }) => {
    try {
      const infoUser = {
        username: info.email,
        password: info.password,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login`,
        infoUser
      );
      console.log(data);
      window.localStorage.setItem("token", data.data.token);
      dispatch(getMe());
      dispatch(checkAuth(true));
    } catch (error) {
      dispatch(setStatusResponse(error.response.status));
      console.error(error.response.status);
    }
  }
);

export const getMe = createAsyncThunk("auth/getMe", async (_, { dispatch }) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}users/me`);
    if (data) {
      dispatch(checkAuth(true));
      return data.data;
    }
  } catch (error) {
    dispatch(checkAuth(false));
    console.error(error);
  }
});

export const getOneUser = createAsyncThunk(
  "auth/getOneUser",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}users/${id}`);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (info, { dispatch }) => {
    try {
      const infoUser = {
        email: info.email,
        fullname: info.fullname,
        username: info.username,
        password: info.password,
        password2: info.password2,
      };
      await axios.post(`${process.env.REACT_APP_API_URL}auth/register`, infoUser);
      // dispatch(checkAuth(true));
    } catch (error) {
      dispatch(checkAuth(false));
      console.error(error);
    }
  }
);

const initialState = {
  open: null,
  status: "loading",
  statusResponse: "",
  statusRegister: "loading",
  auth: false,
  statusMe: "loading",
  dataMe: [] || null,
  infoUser: [] || null,
  infoUserStatus: "loading",
};

const authSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
    setStatusResponse(state, action) {
      state.statusResponse = 401;
      if (state.status === "success") {
        state.statusResponse = "";
      }
    },
    checkAuth(state, action) {
      state.auth = action.payload;
    },
    setSignOut(state) {
      window.localStorage.removeItem("token");
      state.auth = false;
      state.status = "loading";
      state.dataMe = [];
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
      state.statusResponse = "";
    },
    [login.fulfilled]: (state) => {
      state.status = "success";
      state.open = true;
    },
    [login.rejected]: (state) => {
      state.status = "error";
      state.open = true;
    },
    //==========================================
    [register.pending]: (state) => {
      state.statusRegister = "loading";
    },
    [register.fulfilled]: (state) => {
      state.statusRegister = "success";
      state.open = true;
    },
    [register.rejected]: (state) => {
      state.statusRegister = "error";
      state.open = true;
    },
    //================================================
    [getMe.pending]: (state) => {
      state.statusMe = "loading";
      state.statusResponse = "";
      state.dataMe = [];
    },
    [getMe.fulfilled]: (state, action) => {
      state.dataMe = action.payload;
      state.statusMe = "success";
      state.statusResponse = "";
    },
    [getMe.rejected]: (state) => {
      state.dataMe = [];
      state.statusResponse = "";
      state.statusMe = "error";
    },
    //=========================================================
    [getOneUser.pending]: (state) => {
      state.infoUser = [];
      state.infoUserStatus = "loading";
    },
    [getOneUser.fulfilled]: (state, action) => {
      state.infoUser = action.payload;
      state.infoUserStatus = "success";
    },
    [getOneUser.rejected]: (state) => {
      state.infoUser = [];
      state.infoUserStatus = "error";
    },
  },
});

export const { setOpen, setStatusResponse, checkAuth, setSignOut } =
  authSlice.actions;
export default authSlice.reducer;

// window.getMe = getMe();
