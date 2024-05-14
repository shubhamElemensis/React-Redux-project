import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice";
import updateSlice from "./updateSlice";

const rootReducers = {
  postSlice,
  updateSlice,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
