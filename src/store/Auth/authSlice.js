import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/requests";

const initialState = {
  msg: "",
  user: "",
  token: localStorage.getItem("userToken") || null,
  refresh_token: localStorage.getItem("refresh_token") || null,
  loading: false,
};

// register
export const signUpUser = createAsyncThunk(
  "signupuser",
  async (body, { rejectWithValue }) => {
    const res = await request
      .post(`/users/auth/register/step1/`, body)
      .catch((err) => rejectWithValue(err.response.data));
    if (res.status === 201) {
      return res.data;
    }
    return res;
  }
);

// Login
export const signInUser = createAsyncThunk(
  "signinuser",
  async (body, { rejectWithValue }) => {
    const res = await request
      .post(`/users/auth/login/`, body)
      .catch((err) => rejectWithValue(err.response.data));
    if (res.status === 200) {
      return res.data;
    }
    return res;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("userToken");
      state.refresh_token = localStorage.getItem("refresh_token");
    },
    addUser: (state) => {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout: (state) => {
      state.token = null;
      state.refresh_token = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("refresh_token");
      window.location.href = "/";
    },
  },
  extraReducers: (build) => {
    // Login
    build
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
        
        state.token = payload?.access;
        state.refresh_token = payload?.refresh;
        localStorage.setItem("userToken", JSON.stringify(payload?.access));
        localStorage.setItem("refresh_token", JSON.stringify(payload?.refresh));
      })
      .addCase(signInUser.rejected, (state) => {
        state.loading = false;
      });

    // Register
    build
      .addCase(signUpUser.pending, (state) => {
        state.msg = "pending";
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: { data } }) => {
        state.msg = "Success";
        state.loading = true;
        state.token = data?.access;
        state.refresh_token = data?.refresh;
        localStorage.setItem("userToken", JSON.stringify(data?.access));
        localStorage.setItem("refresh_token", JSON.stringify(data?.refresh));
      })
      .addCase(signUpUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
