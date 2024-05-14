import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice"


const store = configureStore({
    reducer: postSlice
})

export default store;