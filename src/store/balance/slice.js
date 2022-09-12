import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
});

export const {} = balanceSlice.actions;
export default balanceSlice.reducer;
