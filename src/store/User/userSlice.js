import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../const/data";

const initialState = {
  user: {},
  loading: false,
  appeals: [],
};

export const getUserInfo = createAsyncThunk(
  "getuserinfo",
  async (s, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const res = await axios
      .get(`${BASE_URL}/users/profile/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => rejectWithValue(err.response.data));
    if (res.status === 200) {
      return res.data;
    }
    return res;
  }
);

export const getUserAppeals = createAsyncThunk(
  "getuserappeals",
  async (s, { rejectWithValue }) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const res = await axios
      .get(`${BASE_URL}/users/appeals`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => rejectWithValue(err.response.data));
    if (res.status === 200) {
      return res.data;
    }
    return res;
  }
);

export const updateUserInfo = createAsyncThunk(
  "updateuserinfo",
  async (
    { firstname, lastname, email, phone, info, id },
    { rejectWithValue }
  ) => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const res = await axios
      .put(
        `${BASE_URL}/users/profile`,
        { firstname, lastname, email, phone, info },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .catch((err) => rejectWithValue(err.response.data));
    if (res.status === 200) {
      return res.data;
    }
    return res;
  }
);

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (build) => {
    // Appeals
    build
      .addCase(getUserAppeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAppeals.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.appeals = payload.data;
      })
      .addCase(getUserAppeals.rejected, (state) => {
        state.loading = false;
      });

    // UserInfo
    build
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.loading = false;        
        state.user = payload;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
