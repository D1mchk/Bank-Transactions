import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./slices/accountsSlice";
import userReducer from "./slices/userSlice";
import transactionsReducer from "./slices/transactionsSlice";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    transactions: transactionsReducer,
    users: userReducer,
    categories: categoriesReducer,
  },
});
