import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../feature/authSlice.js";

const store = configureStore({
   reducer: {
      authSliceReducer,
   }
});

export default store;
