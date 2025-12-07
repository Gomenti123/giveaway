import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.fullName = payload;
    },
  },
});

export const { setName } = slice.actions;

export default slice.reducer;
