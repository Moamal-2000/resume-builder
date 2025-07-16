import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAsideOpen: true,
};

export const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, { payload }) => ({
      ...state,
      [payload.key]: payload.value,
    }),
  },
});

export default globalSlice.reducer;
export const { updateGlobalState } = globalSlice.actions;
