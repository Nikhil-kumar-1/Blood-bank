import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
