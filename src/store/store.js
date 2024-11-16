import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth/authSlice";
import { userSlice } from "./User/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
