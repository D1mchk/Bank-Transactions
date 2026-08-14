import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./slices/accountsSlice";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});
