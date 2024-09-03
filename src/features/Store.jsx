import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import ActiveSingleSlice from "./slices/ActiveSingleSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
    active: ActiveSingleSlice,
  },
});

export default store;
