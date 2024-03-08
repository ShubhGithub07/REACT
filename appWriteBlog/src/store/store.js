import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // post: postSlice,
  },
});

export default store;

// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';
// export const store = configureStore({
//     reducer: todoReducer
// })
