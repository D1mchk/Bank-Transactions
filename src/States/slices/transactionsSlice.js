import { createSlice } from "@reduxjs/toolkit";
import { transactions } from "../../mockData";

const initialState = {
  items: transactions,
  status: "idle",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer;
