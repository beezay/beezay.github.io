import { createSlice } from "@reduxjs/toolkit";

export const userSliceInitialState = {
  isLoading: false,
  user: {},
};

export const userRootSlice = createSlice({
  name: "userRoot",
  initialState: userSliceInitialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userRootSlice.reducer;
