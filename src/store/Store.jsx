// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import movioReducer from "./MovioSlice";
const store = configureStore({
  reducer: {
    movioData: movioReducer,
  },
});

export default store;
store.js;
