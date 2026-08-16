import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../mockData";

const initialState = {
  user: user,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
