// src/redux/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import loggerMiddleware from "./loggerMiddleware";

const middleware =
  process.env.NODE_ENV === "development"
    ? [...getDefaultMiddleware(), loggerMiddleware]
    : getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
