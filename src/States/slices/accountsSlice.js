import { createSlice } from "@reduxjs/toolkit";
import { accounts } from "../../mockData";

const initialState = {
  items: accounts,
  selectedAccountId: 1,
  loading: false,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    selectAccount: (state, action) => {
      state.selectedAccountId = action.payload;
    },
    clearSelectedAccount: (state) => {
      state.selectedAccountId = null;
    },
  },
});

export default accountsSlice.reducer;
export const { selectAccount, clearSelectedAccount } = accountsSlice.actions;
