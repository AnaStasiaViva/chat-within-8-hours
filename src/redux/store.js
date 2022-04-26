import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { chatReducer } from "./slices/chatSlice";

const rootReducer = combineReducers({
  chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
