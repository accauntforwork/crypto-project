import { createSlice } from "@reduxjs/toolkit";

const openWatchListSlice = createSlice({
  name: "openWatchList",
  initialState: {
    openWatchList: false,
  },
  reducers: {
    setOpenWatchList: (state, action) => {
      state.openWatchList = action.payload;
    },
  },
});
export const { setOpenWatchList } = openWatchListSlice.actions;

export default openWatchListSlice.reducer;
