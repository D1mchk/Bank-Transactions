import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../mockData";

const initialState = {
  items: categories,
  selectedAccountId: null,
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
