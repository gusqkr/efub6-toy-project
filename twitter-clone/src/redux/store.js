import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./postSlice";

const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});

export default store;
